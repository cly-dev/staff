const express=require("express");
const {UserInsert}=require("../control/user");
const { AddNotice,AddAdmin,findAdminById,Login}=require("../control/admin");
const Admin=express.Router();
Admin.post("/UserInsert",UserInsert);
Admin.post("/addNotice",AddNotice)
Admin.post("/addAdmin",AddAdmin)
Admin.post("/login",Login);
Admin.get('/findAdminById',findAdminById);
module.exports=Admin;