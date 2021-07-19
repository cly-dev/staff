import {message} from "antd";
// eslint-disable-next-line import/no-anonymous-default-export
export default(content,className="",style="",type="warning")=>{
    message[type]({
        content,
        className,
        style,
    })
    return '';
}