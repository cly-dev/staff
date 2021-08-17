const app=require("./express");
const http=require('http');
const io=require("socket.io");
const {findAdminById}=require("../Dao/AdminDao");
const server=http.createServer(app);
const socket=io(server,{ cors: true });
let onlineCount=0;
let onlineUsers={};
let onlineAdmin={};
socket.on("connection",client=>{
        try{ 
            //员工登录事件
            client.on('login',data=>{
                if(Object.keys(onlineUsers).length===0){
                    onlineUsers[data]=client.id;
                    onlineCount++;
                }else{
                    for(let key in onlineUsers){
                        if(data!==key){
                            console.log("执行啦");
                            onlineUsers[data]=client.id;
                        }
                    }
                }
                client.emit('message',"登陆啦");
                console.log(onlineCount);
                console.log(onlineUsers);
            })
            //管理员登录
            client.on('adminLogin',data=>{
                if(Object.keys(onlineAdmin).length===0){
                    onlineAdmin[data]=client.id;
                    onlineCount++;
                }else{
                    for(let key in onlineUsers){
                        if(data!==key){
                            onlineAdmin[data]=client.id;
                        }
                    }
                }
                console.log(onlineAdmin);
                client.emit('message',"您已上线");
            })
            //员工添加申请
            client.on('apply',data=>{
                for(let key in onlineAdmin){
                    client.to(onlineAdmin[key]).emit("message",'您有一条新的申请,请尽快处理');
                    client.to(onlineAdmin[key]).emit('handleApply',data);
                }
            })
            //管理员发布通知
            client.on("notice",async data=>{
                const result=await findAdminById(data.adminId);
                socket.emit('handleNotice',{...data,name:result.name,position:result.position,status:0});
                for(let key in onlineUsers){
                    socket.to(onlineUsers[key]).emit('message','有一条新通知');
                    socket.to(onlineUsers[key]).emit('handleNotice',{...data,name:result.name,position:result.position,status:0});
                }
            })
            //管理员审核
            client.on('audit',async data=>{
                if(onlineUsers[data.userId]){       
                   client.to(onlineUsers[data.userId]).emit("message",data.message);
                   client.to(onlineUsers[data.userId]).emit("handleTurn",data);
                }
            })
            //员工退出登录
            client.on('loginOut',data=>{
                if(onlineUsers[data]){
                    delete(onlineUsers[data]);
                    onlineCount--;
                }
            })
            //管理员退出登陆
            client.on('adminLogOut',data=>{
                if(onlineAdmin[data]){
                    delete(onlineAdmin[data]);
                    onlineCount--;
                }
                console.log(onlineAdmin);

            })
        }catch(err){
            throw(err);
        }
    })
module.exports=server;