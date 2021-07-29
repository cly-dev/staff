const express=require("express");
const Staff=express.Router();
const {Login,getNotice,ReadNotice,TopNotice}=require("../control/user");
Staff.post('/login',Login);
Staff.get('/getNotices',getNotice);
Staff.get('/readNotice',ReadNotice);
Staff.get('/topNotice',TopNotice);
module.exports=Staff;