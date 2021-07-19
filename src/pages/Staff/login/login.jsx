import React, { Component} from 'react';
import {Row,Col,Button} from "antd";
import {Login} from "../../../axios"
import "./login.scss";
export default class login extends Component {
    handleLogin=async()=>{
        const {id:{value:userId},password:{value:psd},code:{value:checkCode}}=this
        let data=await Login({
            userId,
            psd,
            checkCode
        })
        console.log(data);
    }
    render() {
        return (
            <section className="login-container">
            <Row gutter={{ xs:8, sm: 16, md: 24, lg: 32 }} >
            <Col className="gutter-row" span={6} offset={9}>
            <main>
                <section className="form-tips">
                    员工登陆
                </section>
                <form>
                    <section className="form-item">
                            <span className="item-tips">工号:</span>
                            <input type="text" ref={id=>this.id=id}   placeholder="请输入职工号" required/>
                    </section>  
                    <section className="form-item">
                            <span className="item-tips">密码:</span>
                            <input type="password" ref={password=>this.password=password}  placeholder="请输入密码" required  autoComplete="off" />
                    </section>
                    <section className="form-item form-code">
                            <span className="item-tips">验证码:</span>
                            <input type="password" ref={code=>this.code=code}  placeholder="请输入验证码" required  autoComplete="off" />
                            <img src="/public/images/setdowm.png" alt="" className="img-code" />
                    </section>
                    <section className="form-btn">
                            <Button type="primary" size="large" className="btn-lg" onClick={this.handleLogin}>登录</Button>
                    </section>	
                </form>	
            </main>

                </Col>
                </Row>
            </section>	
        )
    }
}
