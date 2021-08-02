const express=require("express");
const Staff=express.Router();
const {Login,getNotice,ReadNotice,TopNotice, ModicInfo,ModicPassword,ModicImg,addOrder,modicOrder,deleteOrder,getOrderByPageNum,getSearchByPageNum,getOrderDetail,getState,findAllList,findAllType,addApply,delApply,getApplyByPageNum,handleRepeal,handleRef}=require("../control/user");
const {TokenVerify}=require("../api/JWT/token");
const message=require("../api/message.js");
Staff.post('/login',Login);
//拦截
Staff.use((req,res,next)=>{
    const {token}=req.headers;
    if(token){
        const data=TokenVerify(token);
        if(TokenVerify(token)){
            req.headers.userId=data.userId;
            req.headers.username=data.username;
            next();
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

module.exports=Staff;