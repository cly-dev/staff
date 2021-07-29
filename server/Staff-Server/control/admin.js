const {AddNotices}=require("../Dao/NoticeDao");
const {AddAdmins,findAdminByIds,Logins}=require("../Dao/AdminDao");
const {TokenVerify} =require("../api/JWT/token");
const msg=require("../api/msg");
const logger=require("../api/log");
//登录
const Login=async (req,res)=>{
    try{
        const {adminId,password}=req.body;
        if(adminId && password){
            msg(res,await Logins(adminId,password),"账号密码错误",'500');
        }else{
            msg(res,false,'请检查参数名');
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg(res,null);
        throw(error)
    }
}

//增加管理员
const AddAdmin=async (req,res)=>{
    try{
        const {adminId,name,position}=req.body;
        if(!(adminId && name && position)){
            msg(res,false,'请检查参数');
        }else{
            msg(res,await AddAdmins({adminId,name,position}));
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg(res,null);
        throw(error)
    }
}
//查询Id
const findAdminById=async(req,res)=>{
    try{
        const {token}=req.headers;
        const {adminId}=req.query;
        if(token && adminId){
            const data=TokenVerify(token);
            if(data){
                msg(res,await findAdminByIds(adminId),"没有结果");
            }else{
                msg(res,false,"登录过期",300);
            }
        }else{
            msg(res,false,"请检查参数");
        }
    }catch(error){
        logger.error("admin/admin"+error);
        msg(res,null);
        throw(error)
    }
}
//发布公告
const AddNotice=async (req,res)=>{
    try{
        const {token}=req.headers;
        const {userId,title,content}=req.body;
        if(token && userId && title && content){
            const data=TokenVerify(token);
            if(data){
                const {adminId}=data;
                msg(res,await AddNotices({userId,adminId,title,content}));
            }else{
                msg(res,false,'登录过期','400');
            }
        }else{
            msg(res,false,"请检查参数");
        } 
    }catch(error){
        logger.error("admin/admin"+error);
        msg(res,null);
        throw(error)
    }
}
module.exports={
    AddNotice,
    AddAdmin,
    findAdminById,
    Login
}