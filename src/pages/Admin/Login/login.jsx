import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.scss";
class Login extends Component {
     onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                                name="username"
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
