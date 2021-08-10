import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import "./addNotice.scss";
import {message} from "../../../api";
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
    handleRef=async()=>{
        const loading=message('正在提交中','loading');
        const{name,num,price,type,mark}=this.formRef.getFieldValue()
        console.log(this.formRef.getFieldValue());
        // const result=await addOrder({name,num,price,type,mark,createTime:this.state.timer});
        // if(result.code){
        //     loading.destroy();
        //     message('添加成功','success');
        //     this.props.history.push('/index/watchOrder');
        // }else{
        //     message(result.msg);
        // }        
    }
    handleTime=(time,timer)=>{
        this.setState({
            timer
        })
    }
  
    componentDidMount(){
      
    }
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