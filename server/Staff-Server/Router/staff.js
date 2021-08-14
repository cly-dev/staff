const express=require("express");
const Staff=express.Router();
const {getNoticeByDate,Login,getNotice,ReadNotice,TopNotice, ModicInfo,ModicPassword,ModicImg,addOrder,modicOrder,deleteOrder,getOrderByPageNum,getSearchByPageNum,getOrderDetail,getState,findAllList,findAllType,addApply,delApply,getApplyByPageNum,handleRepeal,handleRef,handleDel,getStateByage}=require("../control/user");
const {TokenVerify}=require("../api/JWT/token");
const {findStaffById}=require("../Dao/UserDao");
const message=require("../api/message.js");
Staff.use('/handleDelete',handleDel);
Staff.post('/login',Login);
//拦截
Staff.use(async (req,res,next)=>{
    const {token}=req.headers;
    if(token){
        const data=TokenVerify(token);
        if(TokenVerify(token)){
            if(await findStaffById(data.userId)){
                if(data.status<0){
                    message("FError",res,"该用户状态异常,无法进行操作");
                }else{
                    req.headers.userId=data.userId;
                    req.headers.username=data.username;
                    next();
                }
            }else{
                message("FError",res,'该用户不存在');
            }
        }else{
            message("TError",res);
        }
    }else{
        message('FError',res,'请检查是否携带token');
    }
})
Staff.get('/getNotices',getNotice);
Staff.get('/readNotice',ReadNotice);
Staff.get('/topNotice',TopNotice);
Staff.put('/modicInfo',ModicInfo);
Staff.put('/modicPassword',ModicPassword);
Staff.post('/modicImg',ModicImg);
Staff.post("/addOrder",addOrder);
Staff.put('/modicOrder',modicOrder);    
Staff.delete('/deleteOrder',deleteOrder);
Staff.get('/getOrderByPageNum',getOrderByPageNum);
Staff.get('/getSearchByPageNum',getSearchByPageNum);
Staff.get('/getOrderDetail',getOrderDetail)
Staff.get('/getState',getState);
Staff.get('/findAllType',findAllType);
Staff.get('/findAllList',findAllList);
Staff.post("/addApply",addApply);
Staff.delete("/delApply",delApply);
Staff.get('/getApplyByPageNum',getApplyByPageNum);
Staff.get('/handleRepeal',handleRepeal);
Staff.get('/handleRef',handleRef)
Staff.get('/getStateByage',getStateByage);
Staff.get('/getNoticeByDate',getNoticeByDate);
module.exports=Staff;