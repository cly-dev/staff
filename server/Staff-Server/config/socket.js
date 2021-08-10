const app=require("./express");
const http=require('http');
const io=require("socket.io");
const server=http.createServer(app);
const socket=io(server,{ cors: true });
let onlineCount=0;
let onlineUsers={};
let onlineAdmin={};
socket.on("connection",client=>{
        try{ 
            //登录事件
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
            //添加申请
            client.on('apply',data=>{
                console.log(data);
                socket.emit('message',data);
            })

            //发布通知
            client.on("notice",data=>{
                socket.emit('message',data);
            })
            //退出登录
            client.on('loginOut',data=>{
                onlineUsers.delete('data');
                onlineCount--;
            })
        }catch(err){
            throw(err);
        }
    })
module.exports=server;