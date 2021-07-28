const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const {Login,Delete,findByAll,UserInsert}=require("./control/user");
const app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,"www")));
app.all("/",(req,res)=>{
    res.send("你好");
})
app.post("/login",Login);
app.post("/UserInsert",UserInsert);

app.listen(3030,()=>{
    console.log("服务器开启成功");
})