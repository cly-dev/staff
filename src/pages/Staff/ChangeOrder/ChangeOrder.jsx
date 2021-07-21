import React, { Component } from 'react'
import "./ChangeOrder.scss";
import {message} from "../../../api";
import {
    Form,
    Input,
    Button,
    Cascader,
    DatePicker,
    InputNumber,
  } from 'antd';
const { TextArea } = Input;
export default class ChangeOrder extends Component {
    state={
        //时间
        timer:'',
        initData:{}
    }
    handleRef=value=>{
        message('正在提交中','loading')
        const{name,num,price,type}=this.formRef.getFieldValue()
        
    }
    handleTime=(time,timer)=>{
        this.setState({
            timer
        })
    }
    //请求数据
    componentDidMount(){
        
    }
    render() {
        return (
            <section className="changeOrder-container">
                <section className="changeOrder-header">
                    修改订单
                </section>
                <section className="changeOrder-mainer">
                <Form
                        onFinish={this.handleRef}
                        ref={from=>this.formRef=from}
                        labelCol={{
                            span: 2,
                        }}
                        wrapperCol={{
                            span: 13,
                        }}
                        layout="horizontal"
                        initialValues={{
                            name:'手机'
                        }}
                        size='large'
                        >
                        <Form.Item label="商品名"  
                        name='name'
                        rules={[
                                {
                                    required: true,
                                    message: '请输入商品名',
                                },
                ]}>
                    <Input ref={name=>this.name=name} />
                </Form.Item>
                <Form.Item label="类别"
                        name='type'
                        rules={[
                            {
                                required: true,
                                message: '请输入类别',
                            },
                    ]}
                >
                    <Cascader
                          options={[
                            {
                              value: 'zhejiang',
                              label: 'Zhejiang',
                              children: [
                                {
                                  value: 'hangzhou',
                                  label: 'Hangzhou',
                                },
                              ],
                            },
                          ]}
                        placeholder="请输入类别"
                        ref={type=>this.type=type}
                    />
                    </Form.Item>
                    <Form.Item label="时间"  name="time" rules={[
                            {
                                required: true,
                                message: '请选择时间',
                            },
                    ]}>
                        <DatePicker placeholder="请输入时间" onChange={this.handleTime} />
                    </Form.Item>
                    <Form.Item label="数量" name="num" rules={[
                            {
                                required: true,
                                message: '请输入数量',
                            },
                    ]} >
                    <InputNumber min={1} ref={num=>this.num=num} />
                    </Form.Item>
                    <Form.Item label="价格" name="price" rules={[
                        {
                            required: true,
                            message: '请输入价格',
                        },
                    ]}>
                        <InputNumber min={1} ref={price=>this.price=price}/>
                    </Form.Item>
                    <Form.Item label="备注" name='mark'>
                        <TextArea rows={8} showCount maxLength={100} className="textArea-input"></TextArea>
                    </Form.Item>
                    </Form>
                        <section className="refs-container">
                            <Button  size="large" type="primary"  className="refs-btn" onClick={()=>this.formRef.submit()}>提交</Button>
                        </section>
                </section>
            </section>
        )
    }
}
