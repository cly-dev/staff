const msg=require("../api/message");
const path=require('path');
const SvgCode=require("../api/imgCode");
const {TokenVerify }=require("../api/JWT/token");
const {Logins,ModicPasswords,ModicInfos,ModicImgs}=require("../Dao/UserDao");
const {getNotices,getNoticesCount,ReadNotices,TopNotices}=require("../Dao/NoticeDao");
const {addOrders,modicOrders,deleteOrders,getOrderByPageNums,getSearchByPageNums,getOrderDetails,getStates,getOrderCount,getSearchCount}=require("../Dao/OrderDao");
const {findAllLists,findAllTypes}=require("../Dao/TypeDao.js");
const {addApplys,getApplyByPageNums,delApplys,getApplyCount,handleApply}=require("../Dao/ApplyDao");
const logger=require("../api/log");
const upload=require("../api/upload");
const Fs=require("../api/fs");
let code='';
//登录验证码
const CheckCode=(req,res)=>{
   try{ 
        const {text,data}=SvgCode();
        code=text;
        res.type('svg');
        res.status(200).send(data);
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//登陆
const Login=async(req,res)=>{
    try{
        const {userId,password,checkCode}=req.body;
        if(!(userId && password && checkCode)){
            msg('PError',res);
        }else{
            if(checkCode===code.toLocaleLowerCase() || checkCode===code){
                console.log(await Logins(userId,password));
                msg('DecideRes',res,await Logins(userId,password));
            }else{
                msg('FError',res,'验证码错误');
            }
        }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}

//获取公告
const getNotice=async(req,res)=>{
    try{
        const {userId}=req.headers;
        const {pageNum}=req.query;
        if(pageNum){
            msg('DecideRes',res,await getNotices(userId,pageNum),{pageNum,pageSize:await getNoticesCount(userId)});
        }else{
           msg('PError',res);
        }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}   
//读取公告 
const ReadNotice=async(req,res)=>{
    try{
        const {id}=req.query;
        if(!id){
           msg('PError',res);
        }else{
            msg('DecideRes',res,await ReadNotices(id));
        }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//置顶公告
const TopNotice=async(req,res)=>{
    try{
        const {id}=req.query;
        if(!id){
           msg('PError',res);
        }else{
                msg('DecideRes',res,await TopNotices(id));
        }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//修改信息
const ModicInfo=async(req,res)=>{
    try {
        const {userId}=req.headers;
        const {username,phone,email,sex,address}=req.query;
        if(username && phone && email && sex && address){
            msg('DecideRes',res,await ModicInfos(userId,req.query));
        }else{
               msg('PError',res);
        }
    } catch (error) {
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//修改密码
const ModicPassword=async(req,res)=>{
    try {
        const {userId}=req.headers;
        const {oldPsd,newPsd}=req.query;
        console.log(req.query);
        if(oldPsd && newPsd){
            msg('DecideRes',res,await ModicPasswords(userId,oldPsd,newPsd));
        }else{
               msg('PError',res);
        }
    } catch (error) {
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//修改头像
const ModicImg=async(req,res)=>{
    try{
        const {token}=req.headers;
            const data=TokenVerify(token);
                const {userId,username}=data;
                const file=new Fs();
                const src=path.resolve(__dirname,'../www','images',`${userId + username}`); 
                const ImgPath=await upload(req,await file.init(src),'head');
                if(ImgPath){
                    const newName=`/${new Date().getTime()}head`+path.extname(ImgPath[0].originalFilename);
                    if(await file.handleReName(ImgPath[0].path,src+newName)){
                        let ImgSrc=path.join('/','images',userId+username,newName);
                        msg('Success',res,await ModicImgs(userId,ImgSrc),{},'成功');
                    }else{
                        new Error("头像重命名失败");
                    }
                }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }

}
//增加订单
const addOrder=async(req,res)=>{
    try{
    const {userId}=req.headers;
    const {name,type,createTime,num,price}=req.body;
    if(name &&type && createTime && num && price){
            req.body.userId=userId;
            msg('DecideRes',res,await addOrders(req.body));
    }else{
       msg('PError',res);
    }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//修改订单
const modicOrder=async(req,res)=>{
    try{
        const {id,name,type,createTime,num,price}=req.query;
        if( name &&type && createTime && num && price && id){
            msg('DecideRes',res,await modicOrders(req.query));
        }else{
            msg('PError',res);
        }

    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//删除订单
const deleteOrder=async(req,res)=>{
    try{
        const {id}=req.query;
        if(id){
            msg('DecideRes',res,await deleteOrders(id));
        }else{
            msg('PError',res);
        }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//分页获取订单
const getOrderByPageNum=async(req,res)=>{
    try{
        const {userId}=req.headers;
        const {pageNum}=req.query;
        if(pageNum){
            msg('DecideRes',res,await getOrderByPageNums(userId,pageNum),{pageNum,pageSize:await getOrderCount(userId)});
        }else{
           msg('PError',res);
        }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//分页获取查询结果
const getSearchByPageNum=async(req,res)=>{
    try{
        const {userId}=req.headers;
        const {pageNum,data}=req.query;
        if(pageNum&&data){
            msg('DecideRes',res,await getSearchByPageNums(userId,pageNum,data),{pageNum,pageSize:await getSearchCount(userId,data)});
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error(error)
        msg('SError',res);
        throw(error);
    }
}
//获取订单详情
const getOrderDetail=async(req,res)=>{
    try{
        const {id}=req.query;
        if(id){
            msg("DecideRes",res,await getOrderDetails(id));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error(error);
        msg("SError",res);
        throw(error);
    }
}
//获取报表信息
const getState=async(req,res)=>{
    try{
        const {userId}=req.headers;
        msg("DecideRes",res,await getStates(userId));
    }catch(error){
        logger.error(error);
        msg("SError",res);
        throw(error);
    }
}
//查询所有类别
const findAllType=async(req,res)=>{
    try{
        msg("DecideRes",res,await findAllTypes());
    }catch(error){
        logger.error(error);
        msg("SError",res);
        throw(error);
    }
}
//查询对应的子类别
const findAllList=async(req,res)=>{
    try{
        const {id}=req.query;
        if(id){
            msg("DecideRes",res,await findAllLists(id));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error(error);
        msg("SError",res);
        throw(error);
    }
}
//添加申请
const addApply=async(req,res)=>{
    try{
        const {userId}=req.headers;
        const {title,time,desc}=req.body;
        if(title && time && desc){
            const ApplyInfo={title,time,desc,userId};
            msg("DecideRes",res,await addApplys(ApplyInfo));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error(error);
        msg("SError",res);
        throw(error);
    }
}
//删除申请
const delApply=async(req,res)=>{
    try{
        const {id}=req.query;
        if(id){
            msg("DecideRes",res,await delApplys(id));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error(error);
        msg("SError",res);
        throw(error); 
    }
}
//分页获取自己的申请信息
const getApplyByPageNum=async(req,res)=>{
    try{
        const {userId}=req.headers;
        const {pageNum}=req.query;
        if(pageNum){
            msg("DecideRes",res,await getApplyByPageNums(userId,pageNum),{pageNum,pageSize:await getApplyCount(userId)});
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error(error);
        msg("SError",res);
        throw(error);
    }
}
//撤销申请
const handleRepeal=async(req,res)=>{
    try{
        const {id}=req.query;
        if(id){
            msg("DecideRes",res,await handleApply(id,'-1'));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error(error);
        msg("SError",res);
        throw(error);
    }
}
//重新提交
const handleRef=async(req,res)=>{
    try{
        const {id}=req.query;
        if(id){
            msg("DecideRes",res,await handleApply(id,'0'));
        }else{
            msg("PError",res);
        }
    }catch(error){
        logger.error(error);
        msg("SError",res);
        throw(error);
    }
}
module.exports={
    Login,
    CheckCode,
    getNotice,
    ReadNotice,
    TopNotice,
    ModicInfo,
    ModicPassword,
    ModicImg,
    addOrder,
    modicOrder,
    deleteOrder,
    getOrderByPageNum,
    getSearchByPageNum,
    getOrderDetail,
    getState,
    findAllType,
    findAllList,
    addApply,
    delApply,
    getApplyByPageNum,
    handleRepeal,
    handleRef
}