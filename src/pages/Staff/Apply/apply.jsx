import React, { Component } from 'react'
import "./apply.scss";
import {message} from "../../../api";
import {Staff} from "../../../axios";
import {Apply as handleApply} from "../../../socket";
import moment from 'moment';
import {
    Form,
    Input,
    Button,
    Cascader,
    DatePicker,
    InputNumber,
  } from 'antd';
const { TextArea } = Input;
const {addApply}=Staff;
export default class Apply extends Component {
  
    handleRef=async()=>{
        const data=this.formRef.getFieldValue()
        data.type=data.type[0];
        const result=await addApply(data);
        if(result.code==='200'){
            handleApply(data);
            message("申请成功,请等待审核");
            this.props.history.push('/index/applyList');
        }else{
            message(result.msg);
        }
    }
    componentDidMount(){
        const info=this.props.location.state?this.props.location.state.info:'';
        if(info){
            info.time=moment(info.time);
            info.type=[info.type];
            info.status='0';
            this.formRef.setFieldsValue(info)
        }
        console.log(this.props.location);
    }
    render() {
        return (
            <section className="apply-container">
                <section className="apply-header">
                    申请调休
                </section>
                <section className="apply-mainer">
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
                        <Form.Item label="标题"  
                        name='title'
                        rules={[
                                {
                                    required: true,
                                    message: '请输入标题',
                                },
                ]}>
                    <Input placeholder="请输入标题" />
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
                                label:'事假',
                                value:'事假'
                            },{
                                label:'病假',
                                value:'病假',
                            },{
                                label:'其他',
                                value:'其他'
                            }
                        ]}
                        placeholder="请输入类别"
                    />
                    </Form.Item>
                    <Form.Item label="开始时间"  name="time" rules={[
                            {
                                required: true,
                                message: '请选择时间',
                            },
                    ]}>
                        <DatePicker placeholder="请输入时间"/>
                    </Form.Item>
                    <Form.Item label="天数" name="num" rules={[
                            {
                                required: true,
                                message: '请输入天数',
                            },
                    ]} >
                    <InputNumber min={1} />
                    </Form.Item>
                    <Form.Item label="理由" name='desc'>
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
