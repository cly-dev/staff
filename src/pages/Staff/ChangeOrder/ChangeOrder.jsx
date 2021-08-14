import React, { Component } from 'react'
import "./ChangeOrder.scss";
import {message} from "../../../api";
import {Staff} from '../../../axios';
import moment from 'moment';
import {
    Form,
    Input,
    Button,
    Cascader,
    DatePicker,
    InputNumber,
  } from 'antd';
const {modicOrder,getOrderDetail} =Staff;
const { TextArea } = Input;
class ChangeOrder extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    state={
        //时间
        timer:'',
        initData:{}
    }
    handleRef=async()=>{
        const loading=message('正在提交中','loading')
        const{name,num,price,type,mark,_id,createTime}=this.formRef.getFieldValue();
        const data=await modicOrder({id:_id,name,num,price,type,mark,createTime:moment(createTime).format("YYYY-MM-DD")});
        loading.destroy();
        if(data.code==='200'){
           message("修改成功",'success');
           this.props.history.push("/index/watchOrder");        
       }else{
           message(data.msg);
       }
    }
    //时间
    handleTime=(time,timer)=>{
        this.setState({
            timer
        })
    }
    //请求数据
   componentDidMount(){
       getOrderDetail(this.props.match.params.orderId).then(res=>{
        res.data.createTime=moment(res.data.createTime);
        this.formRef.setFieldsValue(res.data);
        })
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
                        size='large'
                        >
                        <Form.Item
                        label="商品名"  
                        name='name'
                        rules={[
                                {
                                    required: true,
                                    message: '请输入商品名',
                                },
                ]}>
                    <Input  ref={name=>this.name=name} />
                </Form.Item>
                <Form.Item
                        label="类别"
                        name='type'
                        rules={[
                            {
                                required: true,
                                message: '请输入类别',
                            },
                    ]}
                >
                    <Cascader
                        value={this.state.initData.type}
                        placeholder="请输入类别"
                        ref={type=>this.type=type}
                    />
                    </Form.Item>
                    <Form.Item label="时间"  name="createTime" rules={[
                            {
                                required: true,
                                message: '请选择时间',
                            },
                    ]}>
                        <DatePicker  placeholder="请输入时间" onChange={this.handleTime} ref={timer=>this.timer=timer} />
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
export default ChangeOrder;

