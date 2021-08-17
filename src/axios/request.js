import axios from "axios";
import Nprogress from "nprogress";
import BaseUrl from "./axios.config";
import Store from "../redux/store";
import {message} from "../api"
//请求拦截
axios.interceptors.request.use(config=>{
    const reg=/admin/;
    Nprogress.start();
    if(reg.test(config.url)){
        config.headers.token=Store.getState()['admin'].token
    }else{
        if(config.url!=='/api/staff/login'){
            config.headers.token=Store.getState()['user'].token;
        }
    }
    return config;
})
axios.interceptors.response.use(config=>{
    Nprogress.remove();
        if(config.data.code!=="200" && config.data.msg){
            console.log("我执行了");
            message(config.data.msg);
        }
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


