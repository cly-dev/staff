import io from "socket.io-client";
import baseUrl from "./socket.config";
const socket=io.connect(baseUrl);
export const Login=id=>{
    socket.emit("login",id);
}
export const LoginOut=id=>{
    socket.emit('loginOut',id);
}
export const Apply=data=>{
    socket.emit('apply',data);
}
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
