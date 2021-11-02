import axios from "axios";
import Nprogress from "nprogress";
import BaseUrl from "./axios.config";
import Store from "../redux/store";
import { message } from "../api";
//设置响应时间
axios.defaults.timeout = 50000;
//设置默认请求根路径
axios.defaults.baseURL = BaseUrl;
//请求拦截
axios.interceptors.request.use((config) => {
  const reg = /admin/;
  const reg1 = /staff/;
  console.log(config);
  let resource =
    config.params && config.params.resource ? config.params.resource : "";
  Nprogress.start();
  if (reg.test(config.url)) {
    config.headers.token = Store.getState()["admin"].token;
  } else if (reg1.test(config.url)) {
    config.headers.token = Store.getState()["user"].token;
  }
  if (resource) {
    config.headers.token = Store.getState()[resource].token;
  }
  return config;
});
//响应拦截
axios.interceptors.response.use((config) => {
  Nprogress.done();
  if (config.data.code !== "200" && config.data.msg) {
    message(config.data.msg);
  }
  return config;
});
// eslint-disable-next-line import/no-anonymous-default-export
export default (
  url,
  data,
  params,
  method = "GET",
  fn = () => {},
  headers = {}
) => {
  const promise = new Promise((resolve, reject) => {
    try {
      axios({
        url: url,
        data,
        params,
        method,
        headers,
        onUploadProgress: fn,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      Nprogress.done();
      message("网络情况不佳,请稍后再试");
    }
  });
  return promise;
};
