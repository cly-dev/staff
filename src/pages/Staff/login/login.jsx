import React, { Component} from 'react';
import {Row,Col,Button} from "antd";
import { Link } from 'react-router-dom';
import {Staff} from "../../../axios";
import "./login.scss";
import Store from '../../../redux/store';
import message from '../../../api/message';
import {userSave}from "../../../redux/action/user";
const {Login,getCode}=Staff;
export default class login extends Component {
    state={
        el:'',
    }
    //登录
    handleLogin=async()=>{
        const {id:{value:userId},password:{value:password},code:{value:checkCode}}=this
        let data=await Login({
            userId,
            password,
            checkCode
        })
        if(data.code==='200'){
            message('登录成功','success');
            Store.dispatch(userSave(data.data));
            this.props.history.push("/index/newNotice");
        }
    }
    //请求验证码
    handleClick= async ()=>{
        this.setState({
            el:await getCode()
        })
    }
    //生命周期
    componentDidMount(){
        console.log(Store.getState()['user']);

        console.log(typeof Store.getState()['user']);
        getCode().then((result) => {
            this.setState({el:result})
        })
        
        if(Store.getState()['user']!=='' && JSON.stringify(Store.getState()['user'])!=='{}'){
            message('请先退出登录');
            // setTimeout(()=>{
            //     this.props.history.goBack();
            // },1000)
        }
        
    }
    render() {
        return (
            <section className="login-container">
            <Row gutter={{ xs:8, sm: 16, md: 24, lg: 32 }} >
            <Col className="gutter-row" span={6} offset={8}>
            <main>
                <section className="form-tips">
                    员工登陆
                </section>
                <section className="form-container">
                    <section className="form-item">
                            <span className="item-tips">工号:</span>
                            <input type="text" className="userId" ref={id=>this.id=id}   placeholder="请输入职工号" required/>
                    </section>  
                    <section className="form-item">
                            <span className="item-tips">密码:</span>
                            <input type="password" ref={password=>this.password=password}  placeholder="请输入密码" required  autoComplete="off" />
                    </section>
                    <section className="form-item form-code">
                            <span className="item-tips">验证码:</span>
                            <input type="text" ref={code=>this.code=code}  placeholder="请输入验证码" required  autoComplete="off" />           
                            <div dangerouslySetInnerHTML={{__html:this.state.el}} className="img-code" onClick={this.handleClick}>
                            </div>
                    </section>
                    <section className="form-btn">
                            <Button type="primary" size="large" className="btn-lg" onClick={this.handleLogin} shape="round">登录</Button>
                    </section>	
                </section>
                <section className="ForgetPassword-Link">
                    <Link to='/ForgetPassword'>找回密码 </Link>    
                </section>	
            </main>

                </Col>
                </Row>
            </section>	
        )
    }
}

