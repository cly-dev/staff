import axios from "axios";
import Nprogress from "nprogress";
import BaseUrl from "./axios.config";
import Store from "../redux/store";
//请求拦截
axios.interceptors.request.use(config=>{
    Nprogress.start();
    if(config.url!=='/api/staff/login'){
        config.headers.token=Store.getState().token;
    }
    return config;
})
axios.interceptors.response.use(config=>{
    Nprogress.remove();
    return config;
});
axios.defaults.timeout=50000;
// eslint-disable-next-line import/no-anonymous-default-export
export default (url,data,params,method="GET")=>{
    const promise=new Promise((resolve,reject)=>{
        axios({
            url:'/api'+url,
            data,
            params,
            method,
        }).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            resolve(
                {
                    msg:"网络错误",
                    code:'400',
                    data:null
                }
            )
            throw err;
        })
    })
    return promise;
}


