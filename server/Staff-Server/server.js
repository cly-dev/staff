// const express=require("express");
// const path=require("path");
// const bodyParser=require("body-parser");
// const {Login,CheckCode}=require("./control/user");
// const Staff=require("./Router/staff");
// const Admin=require("./Router/admin");
// const {LoginSocket}=require("./control/socket.js");
// const app=express();
// const http=require("http").createServer(app)
// const io=require("socket.io")(http);
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded());
// app.use(express.static(path.join(__dirname,"www")));
// app.use('/admin',Admin);
// app.use('/staff',Staff);
// app.all("/",(req,res)=>{
//     res.send("你好");
// })
// io.on('connection',LoginSocket)

// app.get("/getCode",CheckCode);
const http=require("./config/socket");
http.listen(3030,()=>{
    console.log("服务器开启成功");
})