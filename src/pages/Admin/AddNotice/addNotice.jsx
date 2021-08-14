import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import "./addNotice.scss";
import {message} from "../../../api";
import {Admin} from "../../../axios";
import {Notice} from "../../../socket";

const {addNotice}=Admin;
const { TextArea } = Input;
export default class AddNotice extends Component {
    // constructor(props){
    //     super(props);
    // }
    state={
        //时间
        timer:'',
        type:[],

    }
    //提交事件
    handleRef=async()=>{
        const loading=message('正在提交中','loading');
        const{title,content}=this.formRef.getFieldValue()
        const result=await addNotice({title,content});
        if(result.code==='200'){
            loading.destroy();
            message('添加成功','success');
            Notice(result.data);
            this.props.history.push('/admin-index/通知/查看通知');
            // window.location.reload();
        }else{
            message(result.msg);
        }        
    }
    //处理soket消息事件
    render(){
    return (
            <section className="addNotice-container">
               <section className="addNotice-header">
                    发布通知
               </section>
                <Form
                        onFinish={this.handleRef}
                        ref={from=>this.formRef=from}
                        labelCol={{
                            span: 7,
                        }}
                        wrapperCol={{
                            span: 10,
                        }}
                        layout="horizontal"
                        initialValues={{
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
                    <Input />
                </Form.Item> 
               <Form.Item label="描述" name='content'>
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