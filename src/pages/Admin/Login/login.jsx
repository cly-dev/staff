import React, { Component } from 'react';
import { Form, Input, Button} from 'antd';
import {Admin} from "../../../axios";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.scss";
import {adminSave} from "../../../redux/action/admin";
import Store from "../../../redux/store";
import {message as msg} from "../../../api"; 
const {login}=Admin;
class Login extends Component {
     onFinish = async(values) => {
        const data=await login(values);
        if(data.code==='200'){
            msg("登陆成功",'success');
            Store.dispatch(adminSave(data.data));
            this.props.history.push('/admin-index');
        }
        console.log(data);
      };
    render() {
        return (
            <section className="Admin-container">
                <section className="Admin-mainer">
                    <span className="Admin-title">管理员登录</span>
                    <section className="Login-form">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            >
                            <Form.Item
                                name="adminId"
                                rules={[{ required: true, message: '请输入账号' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码' }]}
                            >
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item style={{textAlign:'center'}}>
                                <Button type="primary" size="large"  htmlType="submit" className="login-form-button">
                                   登录
                                </Button>
                            </Form.Item>
                            </Form>
                        </section>
                    </section>
            </section>
        );
    }
}

export default Login;
