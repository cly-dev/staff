import request from "./request";
//获取验证码
export const getCode=()=>request("/getCode");
//登录
export const Login=data=>request('/staff/login',data,'',"POST");
//修改信息
export const modicInfo=data=>request('/staff/modicInfo','',data,"PUT");
//获取所有类别信息
export const getType=()=>request("/staff/findAllType");
//获取所有子类别信息
export const getList=id=>request("/staff/findAllList",'',{id});
//添加订单
export const addOrder=data=>request('/staff/addOrder',data,'',"POST");
//获取全部订单信息
export const getAllOrder=pageNum=>request("/staff/getOrderByPageNum",'',{pageNum});
//删除订单
export const deleteOrder=id=>request("/staff/deleteOrder",'',{id},"DELETE");
//查询订单
export const searchOrder=(pageNum,data)=>request("/staff/getSearchByPageNum",'',{pageNum,data});
//获取订单详情
export const getOrderDetail=id=>request("/staff/getOrderDetail",'',{id});
//修改订单
export const modicOrder=data=>request("/staff/modicOrder",'',data,"PUT");
//按照年份获取报表信息
export const getStateByage=age=>request("/staff/getStateByage",'',{age});