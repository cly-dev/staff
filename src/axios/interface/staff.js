import request from "../request";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
//获取验证码
 getCode:()=>request("/getCode"),
//登录
 Login:data=>request('/staff/login',data,'',"POST"),
//修改信息
 modicInfo:data=>request('/staff/modicInfo','',data,"PUT"),
//获取所有类别信息
 getType:()=>request("/staff/findAllType"),
//获取所有子类别信息
 getList:id=>request("/staff/findAllList",'',{id}),
//添加订单
 addOrder:data=>request('/staff/addOrder',data,'',"POST"),
//获取全部订单信息
 getAllOrder:pageNum=>request("/staff/getOrderByPageNum",'',{pageNum}),
//删除订单
 deleteOrder:id=>request("/staff/deleteOrder",'',{id},"DELETE"),
//查询订单
 searchOrder:(pageNum,data)=>request("/staff/getSearchByPageNum",'',{pageNum,data}),
//获取订单详情
 getOrderDetail:id=>request("/staff/getOrderDetail",'',{id}),
//修改订单
 modicOrder:data=>request("/staff/modicOrder",'',data,"PUT"),
//按照年份获取报表信息
 getStateByage:age=>request("/staff/getStateByage",'',{age}),
//获取通知公告
 getNotice:pageNum=>request("/staff/getNotices",'',{pageNum}),
//点击读取公告
 readNotice:id=>request("/staff/readNotice",'',{id}),
//点击置顶
 topNotice:id=>request("/staff/topNotice",'',{id}),
//按照日期查看通知
 getNoticeByDate:(pageNum,date)=>request('/staff/getNoticeByDate','',{pageNum,date}),
//发送申请
 addApply:data=>request('/staff/addApply',data,'',"POST"),
//获取申请列表
 getApplyByPageNum:pageNum=>request('/staff/getApplyByPageNum','',{pageNum}),
//撤销申请
 Repeal:id=>request("/staff/handleRepeal",'',{id}),
//重新申请
 RefMore:id=>request("/staff/handleRef",'',{id}),
//删除申请
 DeleteApply:id=>request("/staff/delApply",{},{id},"DELETE"),
//修改密码
 ModicPsd:data=>request("/staff/modicPassword",'',data,"PUT"),
//删除用户
 handleDelete:userId=>request("/staff/handleDelete",'',{userId},"DELETE"),
//获取邮箱验证码
getEmailCode:email=>request('/staff/getEmailCode','',{email}),
//根据邮箱和Id查找密码
getStaffIdByEmail:data=>request('/staff/getStaffIdByEmail','',data),
}