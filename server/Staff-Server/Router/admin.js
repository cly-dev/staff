const express=require("express");
const {handleChangeInfo,handleChangePassword,findAllAminInfo,handleRecover,getOrder,deleteNotice,getAllNotice,findStaffBySearch,getOrderCountByMonth,getOrderCount,AddNotice,AddAdmin,findAdminById,Login,addType,getAllApply,UserInsert,findAllStaff,handleSuspend,handleKick,getAllState,getOrderByEvery,hasReader,ApplyPass, ApplyTurn}=require("../control/admin");
const {TokenVerify}=require("../api/JWT/token");
const message=require("../api/message.js");
const Admin=express.Router();
Admin.post("/login",Login);
Admin.use((req,res,next)=>{
    const {token}=req.headers;
    if(token){
        const data=TokenVerify(token);
        if(TokenVerify(token)){
            req.headers.adminId=data.adminId;
            req.headers.username=data.username;
            next();
        }else{
            message("TError",res);
        }
    }else{
        message('FError',res,'请检查是否携带token');
    }
});
Admin.post("/addStaff",UserInsert);
Admin.post("/addNotice",AddNotice)
Admin.post("/addAdmin",AddAdmin)
Admin.get('/findAdminById',findAdminById);
Admin.post('/addType',addType);
Admin.get("/getAllApply",getAllApply);
Admin.get('/findAllStaff',findAllStaff);
Admin.get('/handleSuspend',handleSuspend)
Admin.get('/handleKick',handleKick);
Admin.get('/getAllState',getAllState);
Admin.get('/getOrderCount',getOrderCount);
Admin.get('/getOrderCountByMonth',getOrderCountByMonth);
Admin.get('/getOrderByEvery',getOrderByEvery);
Admin.get('/findStaffBySearch',findStaffBySearch);
Admin.get('/getAllNotice',getAllNotice);
Admin.delete('/deleteNotice',deleteNotice);
Admin.get('/getOrderById',getOrder);
Admin.get('/handleRecover',handleRecover);
Admin.get('/hasReader',hasReader);
Admin.put('/applyPass',ApplyPass);
Admin.put('/applyTurn',ApplyTurn);
Admin.put('/handleChangeInfo',handleChangeInfo);
Admin.put('/handleChangePassword',handleChangePassword);
Admin.get('/findAllAminInfo',findAllAminInfo);
module.exports=Admin;