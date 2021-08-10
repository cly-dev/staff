import React, { Component} from 'react'
import "./changepassword.scss";
import {Form,Input,Button} from "antd";
import {ModicPsd} from "../../../axios";
import {message} from "../../../api";
import Store from '../../../redux/store';
import {userClear} from "../../../redux/action/user";
export default class Changepassword extends Component {
    handleFinish=async value=>{
        const result=await ModicPsd(value);
        if(result.code==="200"){
            message("修改成功,请重新登录","success");
            this.props.history.push({
                pathname:'/',
                state:{userId:Store.getState().userId}
            })
            Store.dispatch(userClear());
        }else{
            message(result.msg);
        }
    }
    handleRefs=()=>{
        this.passwordForm.submit();
    }
    render() {
        return (
            <section className="change-container">
               <section className="change-header">
                   修改密码
               </section>
               <section className="change-mainer">
                    <Form
                        ref={passwordForm=>this.passwordForm=passwordForm}
                        size="large"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8}}
                        name="passwordForm"
                        onFinish={this.handleFinish}
                        >
                        <Form.Item
                            name="oldPsd"
                            label="旧密码:"
                            hasFeedback

                            rules={[{
                                required:true,
                                message:'旧密码不能为空'
                            }]}>
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item
                            name="newPsd"
                            label="新密码"
                            hasFeedback
                            rules={[{
                                required:true,
                                message:'新密码不能为空'
                            },{
                                pattern:/^[a-zA-Z]\w{5,11}$/,
                                message:'以字母开头，长度在6~12之间，只能包含字母、数字和下划线'
                            }
                            ]}
                            >
                                <Input.Password/>
                        </Form.Item>
                        <Form.Item
                            name="comfirmPsd"
                            label="确认密码"
                            dependencies={['newPsd']}
                            hasFeedback
                            rules={[{
                                required:true,
                                message:'确认密码密码不能为空'
                            },({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('newPsd') === value) {
                                    return Promise.resolve();
                                  }
                    
                                  return Promise.reject(new Error('两次输入密码不一致'));
                                },
                              }),
                            ]
                            }>
                                <Input.Password/>
                        </Form.Item>
                    </Form>
                    <section className="refs-container">
                        <Button size="large" type="primary" className="refs-btn" onClick={this.handleRefs}>提交</Button>
                    </section>
               </section>
            </section>
        )
    }
}
