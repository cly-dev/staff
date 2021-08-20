import React,{useEffect} from 'react'
import { Form, Input,Button,Select } from 'antd';
import "./addAdmin.scss";
import {Admin} from "../../../axios";
import { message } from '../../../api';
import Store from '../../../redux/store';
const {addAdmin}=Admin;
const { Option } = Select;
export default function AddAdmin(props) {
   async function onFinish(value){
       value.adminId= new Date().getTime()+value.adminId;
       const data=await addAdmin(value);
       if(data.code==='200'){
           message("添加成功");
           props.history.push("/admin-index/工作台/管理");
        }    
    }
    useEffect(()=>{
        if(Store.getState()['admin'].power!=='2'){
            message("没有权限");
            setTimeout(()=>{
                props.history.goBack();
            },2000);
        }
    })
    return (
        <section className="addAdmin-container">
             <Form name="nest-messages" onFinish={onFinish} initialValues={{power:'0'}} >
                        <Form.Item
                            name='adminId'
                            label="职工号"
                            rules={[
                            {
                                required: true,
                                message:'用户Id不能为空'
                            },{
                                type:'string',
                                max:4,
                                min:4,
                                message:'只能输入4个字符'
                            }
                            ]}
                        >
                            <Input placeholder="请输入职工号后四位" />
                        </Form.Item>
                        <Form.Item
                            style={{marginLeft:14}}
                            name='name'
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
                            name='position'
                            label="职位"
                            rules={[
                            {
                                required:true,
                                message:'职位不能为空'
                            },
                            ]}
                        >
                            <Input placeholder="请输入职位"/>
                        </Form.Item>
                        <Form.Item
                            style={{marginLeft:14}}
                            name='power'
                            label="管理"
                            rules={[
                            {
                                required:true,
                                message:'管理不能为空'
                            },
                            ]}
                        >
                            <Select > 
                                <Option value="0">普通管理员</Option>
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
