import axios from "axios";
// import Nprogress from "nprogress";
import BaseUrl from "./axios.config";
//请求拦截
axios.interceptors.request.use(config=>{
    // Nprogress.start();
    return config;
})
axios.interceptors.response.use(config=>{
    // Nprogress.remove();
    return config;
});
axios.defaults.timeout=50000;
// eslint-disable-next-line import/no-anonymous-default-export
export default (url,data,params,method="GET")=>{
    const promise=new Promise((resolve,reject)=>{
        axios({
            url:BaseUrl+url,
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


