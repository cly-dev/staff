import React from 'react'
import { Form, Input,Button,Select } from 'antd';
import "./addAdmin.scss";
const { Option } = Select;

export default function addAdmin() {
    function onFinish(value){
        console.log(value);
    }
    return (
        <section className="addAdmin-container">
             <Form name="nest-messages" onFinish={onFinish} >
                        <Form.Item
                            name='AdminId'
                            label="职工号"
                            rules={[
                            {
                                required: true,
                                message:'用户Id不能为空'
                            },{

                            }
                            ]}
                        >
                            <Input placeholder="请输入职工号后四位" />
                        </Form.Item>
                        <Form.Item
                            style={{marginLeft:14}}
                            name='username'
                            label="姓名"
                            rules={[
                            {
                                required:true,
                                message:'姓名不能为空'
                            },
                            ]}
                        >
                            <Input placeholder="请输入姓名"/>
                        </Form.Item>
                        <Form.Item
                            style={{marginLeft:14}}
                            name='posoition'
                            label="职位"
                            rules={[
                            {
                                required:true,
                                message:'职位不能为空'
                            },
                            ]}
                        >
                            <Input placeholder="请输入姓名"/>
                        </Form.Item>
                        <Form.Item
                            style={{marginLeft:14}}
                            name='posoition'
                            label="管理"
                            rules={[
                            {
                                required:true,
                                message:'职位不能为空'
                            },
                            ]}
                        >
                            <Select defaultValue="0"> 
                                <Option value="0">普通管理员</Option>
                                <Option value="1">高级管理员</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="初始密码"
                            style={{marginLeft:-4}}
                        >
                            <Input value='123456' readOnly></Input>
                        </Form.Item>
                        <Form.Item wrapperCol={{}}>
                            <section style={{textAlign:'center',width:'100%'}}>
                                <Button type="primary" htmlType="submit" size="large">
                                    提交
                                </Button>
                            </section>
                        </Form.Item>
                        </Form>
        </section>
    )
}
