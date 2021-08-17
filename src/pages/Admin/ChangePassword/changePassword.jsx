import React from 'react'
import { Form, Input, Button } from "antd";
import "./changePassword.scss";
import {Admin } from "../../../axios";
import {adminClear} from "../../../redux/action/admin";
import { message } from '../../../api';
import Store from '../../../redux/store';
const {handleChangePassword}=Admin;
export default function changePassword(props) {
    const handleFinish =async value => {
        delete(value.comfirmPsd);
       const result=await handleChangePassword(value);
       if(result.code==='200'){
           message("修改成功,请重新登陆",'success');
           Store.dispatch(adminClear());    
            setTimeout(()=>{
                props.history.push("/admin");
            })
       }
    }
    return (
        <section className="adminchangePassword-container">
            <Form
                size="large"
                name="passwordForm"
                onFinish={handleFinish}
            >
                <Form.Item
                    name="oldPsd"
                    label="旧密码:"
                    hasFeedback
                    rules={[{
                        required: true,
                        message: '旧密码不能为空'
                    }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="newPsd"
                    label="新密码"
                    hasFeedback
                    rules={[{
                        required: true,
                        message: '新密码不能为空'
                    }, {
                        pattern: /^[a-zA-Z]\w{5,11}$/,
                        message: '以字母开头，长度在6~12之间，只能包含字母、数字和下划线'
                    },({ getFieldValue }) => ({
                        validator(_, value) {
                            if ( value && getFieldValue('oldPsd') === value) {
                                return Promise.reject(new Error('新密码不能和旧密码相同'));
                            }
                                return Promise.resolve();
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    style={{marginLeft:-14}}
                    name="comfirmPsd"
                    label="确认密码"
                    dependencies={['newPsd']}
                    hasFeedback
                    rules={[{
                        required: true,
                        message: '确认密码密码不能为空'
                    }, ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('newPsd') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('两次输入密码不一致'));
                        },
                    }),
                    ]
                    }>
                    <Input.Password />
                </Form.Item>
                <Form.Item style={{textAlign:'center'}}>
                    <Button htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </section>
    )
}
