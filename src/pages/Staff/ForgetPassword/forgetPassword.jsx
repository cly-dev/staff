import React,{useRef} from 'react'
import "./forgetPassword.scss";
import { Form, Input, Button,Modal} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {Staff} from "../../../axios";
import { message } from '../../../api';
import {useHistory} from "react-router-dom";
const {getEmailCode,getStaffIdByEmail}=Staff;
export default function ForgetPassword() {
    let timer='';
    const history=useHistory();
    const [isModalVisible, setIsModalVisible] =React.useState(false);
    const [num,setNum]=React.useState(60);
    const [password,setPassword]=React.useState('');
    const numRef=useRef();
    const EmailRef=useRef();
    numRef.current=num;
    const FormRef=useRef();
    //校验通过
    const onFinish =async(values) => {
        console.log('Received values of form: ', values);
        const {email,userId}=values;
        const {state:{value:checkCode}}=EmailRef.current;
        const data=await(getStaffIdByEmail({email,userId,checkCode}));
        if(data.code==='200'){
            setPassword(data.data.password);
            setIsModalVisible(true);
        }
    };
    //获取邮箱验证码
    const handleGet=async ()=>{
        let email=FormRef.current.getFieldValue('email');
        const reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(email){
            if(reg.test(email)){
                const data=await getEmailCode(email);
                if(data.code==='200'){
                    message("验证码已发放",'success');
                    timer=setInterval(() => {
                        if(numRef.current===0){
                            clearInterval(timer);
                            setNum(60);
                        }else{
                            setNum(value=>value-1);
                        }
                        }, 1000);
                }
            }else{
                message('请输入正确的邮箱格式');
            }
        }else{
            message('请输入邮箱');
           
        }
    }
    //自定义校验
    function handleValidator(rule, val, callback){
        if(!EmailRef.current.state.value){
            callback("邮箱验证码不能为空");
        }else{
            callback();
        }
    }
    React.useEffect(()=>{
        return()=>{
            //清除定时器
            clearInterval(timer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[numRef])

    return (
        <section className="forgetPassword-container">
            <section className="forgetPassword-mainer">
                <section className="forgetPassword-tips">
                    找回密码
                </section>
                <section className="forgetPassword-form">
                    <Form
                        ref={FormRef}
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: '请输入邮箱地址' },{type:'email',message:'请输入正确的邮箱格式'}]}
                        >
                            <Input size="large" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                        </Form.Item>
                        <Form.Item name="userId" rules={[{ required: true, message: '请输入工号' }]}  >
                            <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
                        </Form.Item>
                        <Form.Item
                            style={{ whiteSpace: 'nowrap' }}
                            name="checkCode"
                            rules={[{
                                validator:handleValidator
                            }]}
                        >
                            <Input
                                ref={EmailRef}
                                name="checkCode"
                                style={{ width: '60%' }}
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="text"
                                placeholder="输入邮箱验证码"
                                
                            />                          
                            <Button size="large" style={{ marginLeft: 50 }} onClick={handleGet} disabled={num!==60?true:false} >{num===60?'获取验证码':`剩余${num}秒`}</Button>
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'center' }}>
                            <Button style={{ borderRadius: 5, width: '20%', marginTop: 20 }} size="large" type="primary" htmlType="submit" className="login-form-button">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                     {/* 
                弹出框提示密码
            */}
                
                </section>
            </section>
            <Modal title="找回密码" okText="我已记住" cancelText="去登陆" visible={isModalVisible} onOk={()=>setIsModalVisible(false)} onCancel={()=>history.push('/')}>
                您的密码为:{password}
            </Modal>
        </section>
    )
}
