const mongoose=require("mongoose");
const { connectionObj} =require("../config/connect");
const  baseurl = `mongodb://${connectionObj.host}:${connectionObj.port}/${connectionObj.dataBase}`;
//连接数据库
mongoose.connect(baseurl,{useNewUrlParser: true,useUnifiedTopology: true});
//获得数据库操作句柄
let dbHandle=mongoose.connection;
//监听连接错误
dbHandle.on("error",(err)=>{
    console.log("连接异常");
})
//监听连接断开
dbHandle.on("disconnected",()=>{
    console.log("连接断开");
})
//监听连接
dbHandle.on("open",(err)=>{
    try{
    if(err){
        console.log("数据库连接失败");
        throw err;
    }else{
        console.log("数据库连接成功");
    }
    }catch(e){
        throw e;
    }   
})
module.exports=mongoose;
