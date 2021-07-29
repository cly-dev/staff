const app=require("./express");
const http=require('http');
const io=require("socket.io");
const server=http.createServer(app);
const socket=io(server);
let onlineCount=0;
let onlineUsers=[];
socket.on("connection",client=>{
        try{ 
            //登录事件
            client.on('login',data=>{
                if(!onlineUsers.some(value=>value.userId===data)){
                    onlineUsers.push({
                        userId:data,
                        socketId:client.id
                    })
                    onlineCount++;
                }
                console.log("在线人数"+onlineCount);
                console.log(onlineUsers);
            })
            client.on("notice",data=>{
                socket.emit('message',data);
            })
            //退出登录
            client.on('loginOut',data=>{
                onlineUsers=onlineUsers.filter(value=>value.userId!==data);
                onlineCount--;
            })
        }catch(err){
    
        }
    })
module.exports=server;