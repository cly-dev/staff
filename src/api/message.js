import {message} from "antd";
message.config({
    top: 100,
    duration: 2,
  });
  
// eslint-disable-next-line import/no-anonymous-default-export
export default(content,type="warning",className="",style="")=>{
    message[type]({
        content,
        className,
        style,
    })
    return '';
}