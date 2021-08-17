import request from "../request";
// eslint-disable-next-line import/no-anonymous-default-export
export default{
    //登陆
    login:data=>request('/admin/login',data,'',"POST"),
    //添加用户
    addStaff:data=>request('/admin/addStaff',data,'','POST'),
    //查询所有用户
    findAllStaff:pageNum=>request('/admin/findAllStaff','',{pageNum}),
    //根据用户Id查找报表信息
    getOrderById:userId=>request('/admin/getOrderById','',{userId}),
    //停职
    handleSuspend:userId=>request('/admin/handleSuspend','',{userId}),
    //解雇
    handleKick:userId=>request('/admin/handleKick','',{userId}),
    //恢复
    handleRecover:userId=>request('/admin/handleRecover','',{userId}),
    //按照月份获取销售额
    getOrderCountByMonth:data=>request('/admin/getOrderCountByMonth','',data),
    //按照年份获取销售额
    getOrderCount:year=>request('/admin/getOrderCount','',{year}),
    //按照年份获取员的年度销售额
    getOrderByEvery:(year,pageNum)=>request('/admin/getOrderByEvery','',{year,pageNum}),
    //搜索员工
    findStaffBySearch:(data,pageNum)=>request('/admin/findStaffBySearch','',{pageNum,data}),
    //发布通知
    addNotice:data=>request('/admin/addNotice',data,'',"POST"),
    //分页查看通知
    getAllNotice:pageNum=>request('/admin/getAllNotice','',{pageNum}),
    //删除通知
    deleteNotice:noticeId=>request('/admin/deleteNotice','',{noticeId},"DELETE"),
    //获取已读取通知的人数
    hasReader:noticeId=>request('/admin/hasReader','',{noticeId}),
    //获取所有申请的信息
    getAllApply:pageNum=>request('/admin/getAllApply','',{pageNum}),
    //通过申请
    applyPass:noticeId=>request('/admin/applyPass','',{noticeId},"PUT"),
    //驳回申请
    applyTurn:(noticeId,mark)=>request("/admin/applyTurn",'',{noticeId,mark},"PUT"),
    //修改信息
    handleChangeInfo:data=>request("/admin/handleChangeInfo",'',data,"PUT"),
    //修改密码
    handleChangePassword:data=>request('/admin/handleChangePassword','',data,"PUT"),
    //获取全部管理员信息
    findAllAminInfo:pageNum=>request('/admin/findAllAminInfo','',{pageNum})
    
}