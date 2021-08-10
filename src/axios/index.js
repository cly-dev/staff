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
//获取通知公告
export const getNotice=pageNum=>request("/staff/getNotices",'',{pageNum});
//点击读取公告
export const readNotice=id=>request("/staff/readNotice",'',{id});
//点击置顶
export const topNotice=id=>request("/staff/topNotice",'',{id});
//按照日期查看通知
export const getNoticeByDate=(pageNum,date)=>request('/staff/getNoticeByDate','',{pageNum,date});
//发送申请
export const addApply=data=>request('/staff/addApply',data,'',"POST");
//获取申请列表
export const getApplyByPageNum=pageNum=>request('/staff/getApplyByPageNum','',{pageNum});
//撤销申请
export const Repeal=id=>request("/staff/handleRepeal",'',{id});
//重新申请
export const RefMore=id=>request("/staff/handleRef",'',{id});
//删除申请
export const DeleteApply=id=>request("/staff/delApply",{},{id},"DELETE");
//修改密码
export const ModicPsd=data=>request("/staff/modicPassword",'',data,"PUT");
//删除用户
export const handleDelete=userId=>request("/staff/handleDelete",'',{userId},"DELETE");