import React, { Component } from 'react'
import { Form, Input,Select,Button} from 'antd';
import "./changeInfo.scss";
const { Option } = Select;

export default class changeInfo extends Component {
    handleRefs=value=>{
        console.log(value);
    }

    render() {
        return (
            <section className="chanegeInfo-container">
                <section className="changeInfo-header">
                    修改信息
                </section>
                <section className="changeInfo-mainer">
                    <Form
                      onFinish={this.handleRefs}
                      ref={changeInfo=>this.changeInfo=changeInfo}
                      size="large"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 8}}
                    >
                        <Form.Item
                            label="姓名"
                            name='name'
                            rules={[{
                                required:true,
                                message:'姓名不能为空'
                            }]}
                        >
                            <Input  placeholder="请输入姓名"></Input>
                        </Form.Item>
                        <Form.Item 
                            label="电话"
                            name='phone'
                            rules={[
                                {
                                    required:true,
                                    message:'电话不能为空'
                                },{
                                    type:'regexp',
                                    pattern:/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
                                    message:'手机格式错误'
                                }
                            ]}
                            >
                            <Input placeholder="请输入电话"></Input>
                        </Form.Item>
                        <Form.Item
                            label="邮箱"
                            name="email"
                            
                            rules={[{
                                type:'email',
                                message:'邮箱格式错误'
                            },{
                                required:true,
                                message:'邮箱不能为空'
                            }
                        
                        ]}
                        >
                            <Input type="email" placeholder="请输入邮箱"></Input>
                        </Form.Item>
                        <Form.Item
                            label="性别"
                            name="sex"
                            rules={[{
                                required:true,
                                message:"性别不能为空"
                            }]}
                        >
                            <Select defaultValue="男"> 
                                <Option value="男">男</Option>
                                <Option value="女">女</Option>
                            </Select>
                        </Form.Item>
                        
                        <Form.Item
                            name="address" 
                            label="籍贯"
                            rules={[{
                                required:true,
                                message:'籍贯不能为空'
                            }]}
                        >
                            <Input  placeholder="请输入籍贯"></Input>
                        </Form.Item>
                    </Form>
                </section>
                <section className="changeInfo-footer">
                        <Button type="primary" size="large"  className="refs-btn" onClick={()=>this.changeInfo.submit()}>提交</Button>
                </section>
            </section>
        )
    }
}
