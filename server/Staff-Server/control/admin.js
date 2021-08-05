const {AddNotices}=require("../Dao/NoticeDao");
const {AddAdmins,findAdminByIds,Logins}=require("../Dao/AdminDao");
const {addTypes}=require("../Dao/TypeDao");
const {getAllApplys,getAllCount}=require("../Dao/ApplyDao");
const {UserInserts,findAllStaffs,findStaffCount, handleStaff}=require("../Dao/UserDao.js");
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
        const {userId,title,content}=req.body;
        if(userId && title && content){
                msg('DecideRes',res,await AddNotices({userId,adminId,title,content}));
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
    const {userId}=req.query;
    if(userId){
        msg("DecideRes",res,await handleStaff(userId,'-1'));
    }else{
        msg("PError",res);
    }
}
//解雇
const handleKick=async(req,res)=>{
    const {userId}=req.query;
    if(userId){
        msg("DecideRes",res,await handleStaff(userId,'-2'));
    }else{
        msg("PError",res);
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
    handleKick
}