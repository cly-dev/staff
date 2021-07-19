function useWebSocket(handleMsg){
    const ws=new WebSocket();
    function init(){
        ws.addEventListener("open",handleOpen,false);
        ws.addEventListener("error",handleError,false);
        ws.addEventListener("close",handleClose,false);
        ws.addEventListener("message",handleMsg,false);
    }
    function handleOpen(){
        console.log("连接上了");
    }
    function handleError(){
        console.log("错误");
    }
    function handleClose(){
        console.log("断开连接了");
    }
    init();
    return ws;
}
export default useWebSocket;