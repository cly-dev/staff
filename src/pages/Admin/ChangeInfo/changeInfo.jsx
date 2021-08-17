import React from 'react'
import { Form, Input,Select,Button,InputNumber} from 'antd';
import Store from "../../../redux/store";
import "./changeInfo.scss";
import {message} from "../../../api";
import {adminSave} from "../../../redux/action/admin";
import {Admin} from "../../../axios";
const {handleChangeInfo}=Admin;
const { Option } = Select;

export default function changeInfo(props) {
    const handleRefs=async value=>{
        const result=await handleChangeInfo(value);
        if(result.code==='200'){
            message('修改成功','success');
            Store.dispatch(adminSave(result.data));
            props.history.push('/admin-index/个人信息');
        }
    }
    return (
        <section className="adminChangeInfo-container">
              <Form
                      initialValues={Store.getState()['admin']}
                      onFinish={handleRefs}
                      size="large"
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
                            label="年龄"
                            name='age'
                            rules={[{
                                    required:true,
                                    message:'年龄不能为空'
                                },{
                                    type:'number',
                                    max:150,
                                    min:10,
                                    message:'年龄在指定范围之内'
                                }]}
                        >
                            <InputNumber type="number" min={16} max={150}  placeholder="请输入姓名"></InputNumber>
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
                            <Select> 
                                <Option value="男">男</Option>
                                <Option value="女">女</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item style={{textAlign:'center'}}>
                            <Button htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
        </section>
    )
}
