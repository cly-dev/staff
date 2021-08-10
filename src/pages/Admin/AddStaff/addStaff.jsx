import React, { Component } from 'react';
import { Form, Input,Button } from 'antd';
import "./addStaff.scss";
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 9,
    },
  };
class addStaff extends Component {

    onFinish = (values) => {
        console.log(values);
      };
    render() {
        return (
            <section className="addStaff-container">
                <section className="addStaff-header">
                    添加员工
                </section>
                <section className="addStaff-form">
                    <Form {...layout} name="nest-messages" onFinish={this.onFinish} >
                        <Form.Item
                            name='userId'
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
                            label="初始密码"
                           
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
            </section>
        );
    }
}

export default addStaff;
