const {AddNotices,getAllNotices,deleteNotices,getAllNoticeCount}=require("../Dao/NoticeDao");
const {findAllCount,AddAdmins,findAdminByIds,Logins,modicAdminInfo,modicAdminPassword,findAllAdmin,modicPower,modicStatus}=require("../Dao/AdminDao");
const {addTypes}=require("../Dao/TypeDao");
const {getAllStates,getStaffCount,getOrderCounts,getOrderCountByMonths,getOrderCountEvery,getOrderById}=require("../Dao/OrderDao");
const {getAllApplys,getAllCount,handlePass,handleTurn}=require("../Dao/ApplyDao");
const {UserInserts,findAllStaffs,findStaffCount, handleStaff, findStaffSearch,getStaffPsd,findStaffSearchCount}=require("../Dao/UserDao.js");
const {HasReader}=require('../Dao/NoticeUserDao');
const Time=require("../api/time");
const msg=require("../api/message");
const logger=require("../api/log");
//登录
const Login=async(req,res)=>{
    try{
        const {adminId,password}=req.body;
        if(adminId && password){
            msg('DecideRes',res,await Logins(adminId,password));
        }else{
           msg('PError',res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//增加用户
const UserInsert=async(req,res)=>{
    try{
        const{username,userId}=req.body;
        const timer=userId.slice(0,userId.length - 4) * 1;
        const joinTime=Time(timer);
        if(!(username && userId)){
            msg('PError',res);
        }else{
            msg('DecideRes',res,await UserInserts({username,userId,joinTime}));
        }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//增加管理员
const AddAdmin=async(req,res)=>{
    try{
        const {adminId,name,position}=req.body;
        if(!(adminId && name && position)){
            msg('PError',res);
        }else{
            msg('DecideRes',res,await AddAdmins({adminId,name,position}));
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//查询Id
const findAdminById=async(req,res)=>{
    try{
        const {adminId}=req.query;
        if(adminId){
                msg('DecideRes',res,await findAdminByIds(adminId));
        }else{
                msg('PError',res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//发布公告
const AddNotice=async(req,res)=>{
    try{
        const {adminId}=req.headers;
        const {title,content}=req.body;
        if(title && content){
                msg('DecideRes',res,await AddNotices({adminId,title,content}));
        }else{
                msg('PError',res);
        } 
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//添加类别
const addType=async(req,res)=>{
    try{
            const {type,list}=req.body;
            if(type && list){
                msg("DecideRes",res,await addTypes(req.body));
            }else{
                msg("PError",res);
            }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//查询所有人的请假信息
const getAllApply=async(req,res)=>{
    try{
        const {pageNum}=req.query;
        if(pageNum){
            msg("DecideRes",res,await getAllApplys(pageNum),{pageNum,pageSize:await getAllCount()});
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//查询所有人的信息
const findAllStaff=async(req,res)=>{
    try{
        const {pageNum}=req.query;
        if(pageNum){
            msg("DecideRes",res,await findAllStaffs(pageNum),{pageSize:await findStaffCount(),pageNum});
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//停职
const handleSuspend=async(req,res)=>{
    try{
        const {userId}=req.query;
        if(userId){
            msg("DecideRes",res,await handleStaff(userId,-1));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//解雇
const handleKick=async(req,res)=>{
    try{
        const {userId}=req.query;
        if(userId){
            msg("DecideRes",res,await handleStaff(userId,-2));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//恢复
const handleRecover=async(req,res)=>{
    try{
        const {userId}=req.query;
        if(userId){
            const data=await getStaffPsd(userId);
            let status=1;
            if(data[0].password==='123456'){
                status=0;
            }
            msg("DecideRes",res,await handleStaff(userId,status));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//获取全部的人的报表信息
const getAllState=async(req,res)=>{
    try{
        const{pageNum}=req.query;
        if(pageNum){
            msg("DecideRes",res,await getAllStates(pageNum),{pageNum,pageSize:await getStaffCount()});  
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//按照年份获取总销售额
const getOrderCount=async(req,res)=>{
    try{
        const {year}=req.query;
        if(year){
            msg("DecideRes",res,await getOrderCounts(year));  
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//按照年份月份统计销售额
const getOrderCountByMonth=async(req,res)=>{
    try{
        const {year,month}=req.query;
        if(year && month){
            msg("DecideRes",res,await getOrderCountByMonths(year,month));
        }else{
            msg("PError",res);
        }      
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//统计全部人的年度销售额
const getOrderByEvery=async(req,res)=>{
    try{
        const {year,pageNum}=req.query;
        if(year&&pageNum){
            msg("DecideRes",res,await getOrderCountEvery(year,pageNum),{pageNum,pageSize:await getStaffCount()});
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//搜索用户
const findStaffBySearch=async(req,res)=>{
    try{
        const {data,pageNum}=req.query;
        if(data && pageNum){
            msg("DecideRes",res,await findStaffSearch(data,pageNum),{pageNum,pageSize:await findStaffSearchCount(data)});
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//查询所有通知
const getAllNotice=async(req,res)=>{
    try{
        const {pageNum}=req.query;
        if(pageNum){
            msg("DecideRes",res,await getAllNotices(pageNum),{pageNum,pageSize:await getAllNoticeCount()});
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//删除通知
const deleteNotice=async(req,res)=>{
    try{
        const {noticeId}=req.query;
        if(noticeId){
            msg("DecideRes",res,await deleteNotices(noticeId));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)
    }
}
//根据用户Id获取订单详情
const getOrder=async(req,res)=>{
    try{
        const {userId}=req.query;
        if(userId){
            msg("DecideRes",res,await getOrderById(userId));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)  
    }
}
//获取某条通知的全部已读人数
const hasReader=async(req,res)=>{
    try{
        const {noticeId}=req.query;
        if(noticeId){
            msg("DecideRes",res,await HasReader(noticeId));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)  
    }
}
//申请通过
const ApplyPass=async(req,res)=>{
    try{
        const {noticeId}=req.query;
        if(noticeId){
            msg("DecideRes",res,await handlePass(noticeId));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)  
    }
}
//驳回申请
const ApplyTurn=async(req,res)=>{
    try{
        const {noticeId,mark}=req.query;
        if(noticeId && mark){
            msg("DecideRes",res,await handleTurn(noticeId,mark));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)  
    }
}
//修改信息
const handleChangeInfo=async(req,res)=>{
    try{
        const {adminId}=req.headers;
        const {name,age,phone,email,sex}=req.query;
        if(name && age && phone && email && sex){
            msg("DecideRes",res,await modicAdminInfo(adminId,req.query));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error) 
    }
}
//修改密码
const handleChangePassword=async(req,res)=>{
    try{
        const {adminId}=req.headers;
        const {newPsd,oldPsd}=req.query;
        if(newPsd && oldPsd){
            msg("DecideRes",res,await modicAdminPassword(adminId,oldPsd,newPsd));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error) 
    }
}
//获取全部管理员的信息
const findAllAminInfo=async(req,res)=>{
    try{
        const {pageNum}=req.query;
        if(pageNum){
            msg("DecideRes",res,await findAllAdmin(pageNum),{pageNum,pageSize:await findAllCount()});
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg('SError',res);
        throw(error)  
    }
}
module.exports={
    AddNotice,
    AddAdmin,
    findAdminById,
    Login,
    addType,
    getAllApply,
    UserInsert,
    findAllStaff,
    handleSuspend,
    handleKick,
    getAllState,
    getOrderCount,
    getOrderCountByMonth,
    getOrderByEvery,
    findStaffBySearch,
    getAllNotice,
    deleteNotice,
    getOrder,
    handleRecover,
    hasReader,
    ApplyPass,
    ApplyTurn,
    handleChangeInfo,
    handleChangePassword,
    findAllAminInfo,
}