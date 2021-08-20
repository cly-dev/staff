import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Cascader,
  DatePicker,
  InputNumber,
} from 'antd';
import {Staff} from '../../../axios'; 
import {message} from "../../../api";
import "./addOrder.scss";
const {getType,getList,addOrder}=Staff;
const { TextArea } = Input;
export default class AddOrder extends Component {
    // constructor(props){
    //     super(props);
    // }
    state={
        //时间
        timer:'',
        type:[],

    }
    handleRef=async()=>{
        const loading=message('正在提交中','loading');
        const{name,num,price,type,mark}=this.formRef.getFieldValue()
        const result=await addOrder({name,num,price,type,mark,createTime:this.state.timer});
        if(result.code==='200'){
            loading.destroy();
            message('添加成功','success');
            this.props.history.push('/index/watchOrder');
        }       
    }
    handleTime=(time,timer)=>{
        this.setState({
            timer
        })
    }
  
    componentDidMount(){
        const {type}=this.state;
        getType().then(res=>{
            console.log(res);
            res.data.forEach(async value=>{
                let result=await getList(value._id);
                let children=[];
                result.data.list.forEach(value=>{
                    children.push({
                        value,
                        label:value
                    })
                })
                type.push({
                    value:value.type,
                    label:value.type,
                    id:value._id,
                    children
                })
            })
            this.setState({
                type
            })
        })
    }
    render(){
    return (
            <section className="addOrder-container">
                <section className="addOrder-title">
                    添加流水
                </section>
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
                            size:'large',
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
                    <Input placeholder="请输入商品名"/>
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
                        options={this.state.type}
                        placeholder="请输入类别"
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
                    <InputNumber min={1} placeholder="请输入数量" />
                    </Form.Item>
                    <Form.Item label="价格" name="price" rules={[
                        {
                            required: true,
                            message: '请输入价格',
                        },
                    ]}>
                        <InputNumber min={1} placeholder="请输入价格"/>
                    </Form.Item>
                    <Form.Item label="备注" name='mark'>
                        <TextArea rows={8} showCount maxLength={100} className="textArea-input"></TextArea>
                    </Form.Item>
                    </Form>
                        <section className="refs-container">
                            <Button  size="large" type="primary"  className="refs-btn" onClick={()=>this.formRef.submit()}>提交</Button>
                        </section>
            </section>
    )
    }
  }