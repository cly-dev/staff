import io from "socket.io-client";
import baseUrl from "./socket.config";
const socket=io.connect(baseUrl);
//用户登录
export const Login=id=>{
    socket.emit("login",id);
}
//用户退出登录
export const LoginOut=id=>{
    socket.emit('loginOut',id);
}
//用户发布申请
export const Apply=data=>{
    socket.emit('apply',data);
}
//管理员登录
export const AdminLogin=(data)=>{
    socket.emit('adminLogin',data);
}
//管理员退出登陆
export const AdminLogOut=data=>{
    socket.emit('adminLogOut',data);
}
//用户收到通知
export const receptionNotice=ReceptionNotice=>{
    socket.on('handleNotice',ReceptionNotice);
}
//用户收到申请回执
export const receptionTurn=ReceptionTurn=>{
    socket.on('handleTurn',ReceptionTurn);
}
//管理员发布通知
export const Notice=data=>{
    socket.emit('notice',data);
}
//管理员审核申请
export const Audit=data=>{
    socket.emit('audit',data);
}
//管理员接收到申请信息
export const receptionApply=ReceptionApply=>{
    socket.on('handleApply',ReceptionApply);
}

//处理全局消息
// eslint-disable-next-line import/no-anonymous-default-export
export default handlemsg=>{
    socket.on('message',handlemsg);
    return socket;
}


// function useWebSocket(handleMsg){
//     const ws=new WebSocket();
//     function init(){
//         ws.addEventListener("open",handleOpen,false);
//         ws.addEventListener("error",handleError,false);
//         ws.addEventListener("close",handleClose,false);
//         ws.addEventListener("message",handleMsg,false);
//     }
//     function handleOpen(){
//         console.log("连接上了");
//     }
//     function handleError(){
//         console.log("错误");
//     }
//     function handleClose(){
//         console.log("断开连接了");
//     }
//     init();
//     return ws;
// }
