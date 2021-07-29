const express=require("express");
const path=require("path");
const Staff=require("../Router/staff");
const Admin=require("../Router/admin");
const bodyParser=require("body-parser");
const {CheckCode}=require("../control/user")
const app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,"../www")));
app.use('/admin',Admin);
app.use('/staff',Staff);
app.all("/",(req,res)=>{
    res.send("你好");
})
app.get("/getCode",CheckCode);

module.exports=app;