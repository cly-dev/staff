const msg=require("../api/msg");
const SvgCode=require("../api/imgCode");
const {TokenVerify }=require("../api/JWT/token");
const {Logins,UserInserts}=require("../Dao/UserDao");
const {getNotices,getNoticesCount,ReadNotices,TopNotices}=require("../Dao/NoticeDao");
let code='';
const logger=require("../api/log");

//登录验证码
const CheckCode=(req,res)=>{
    try{
        const {text,data}=SvgCode();
        code=text;
        res.type('svg');
        res.status(200).send(data);
    }catch(error){
        logger.error(error)
        msg(res,null);
        throw(error);
    }
}
//登陆
const Login=async(req,res)=>{
    try{
        const {userId,password,checkCode}=req.body;
        if(!(userId && password && checkCode)){
            msg(res,false,'请检查参数名');
        }else{
            if(checkCode===code.toLocaleLowerCase() || checkCode===code){
                msg(res,await Logins(userId,password),'账号密码错误');
            }else{
                msg(res,false,'验证码错误');

            }
        }
    }catch(error){
        logger.error(error)
        msg(res,null);
        throw(error);
    }
}
//增加用户
const UserInsert=async(req,res)=>{
    try{
        const{username,userId}=req.body;
        if(!(username && userId)){
            msg(res,false,'请检查参数名');
        }else{
            msg(res,await UserInserts({username,userId}),);
        }
    }catch(error){
        logger.error(error)
        msg(res,null);
        throw(error);
    }
}
//获取公告
const getNotice=async(req,res)=>{
    try{
        const {token}=req.headers;
        const {pageNum}=req.query;
        if(token && pageNum){
            const data=TokenVerify(token);
            if(data){
                const {userId}=data;
                msg(res,await getNotices(userId,pageNum),'成功','200',{pageNum,pageSize:await getNoticesCount(userId)});
            }else{
                msg(res,false,"登录过期",'300');
            }
        }else{
            msg(res,false,"请检查参数名");
        }
    }catch(error){
        logger.error(error)
        msg(res,null);
        throw(error);
    }
}   
//读取公告 
const ReadNotice=async(req,res)=>{
    try{
        const {token}=req.headers;
        const {id}=req.query;
        if(!(token && id)){
            msg(res,false,"请检查参数");
        }else{
            const data=TokenVerify(token);
            if(data){
                msg(res,await ReadNotices(id),"不能重复读取",'500');
            }else{
                msg(res,false,"登录过期",'300');
            }
        }
    }catch(error){
        logger.error(error)
        msg(res,null);
        throw(error);
    }
}
//置顶公告
const TopNotice=async(req,res)=>{
    try{
        const {token}=req.headers;
        const {id}=req.query;
        if(!(token && id)){
            msg(res,false,"请检查参数");
        }else{
            const data=TokenVerify(token);
            if(data){
                msg(res,await TopNotices(id),'不能重复置顶','500');
            }else{
                msg(res,false,"登录过期",'300');
            }
        }
    }catch(error){
        logger.error(error)
        msg(res,null);
        throw(error);
    }
}
module.exports={
    UserInsert,
    Login,
    CheckCode,
    getNotice,
    ReadNotice,
    TopNotice
}