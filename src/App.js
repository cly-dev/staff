import {Fragment} from 'react';
import {Route} from "react-router-dom";
import Login from "./pages/Staff/login/login.jsx";
import React, { Component } from 'react'
import message  from "./api/message";
import Index from"./pages/Staff/index/index.jsx";
import Store from "./redux/store";
import Admin from "./pages/Admin/Login/login.jsx";
import AdminIndex from "./pages/Admin/Index/index.jsx";
import ForgetPassword from './pages/Staff/ForgetPassword/forgetPassword.jsx';
export default class App extends Component {
  static getDerivedStateFromError(error){
    // eslint-disable-next-line no-unused-expressions
    error?message('网络错误,请稍后再试'):'';
  }
  componentDidMount(){
    Store.subscribe(()=>{
        this.forceUpdate();
    })
  }
  render() {
    return (
      <Fragment>
              <Route  path='/admin-index' component={AdminIndex}></Route>
              <Route path='/admin' component={Admin}></Route>
              <Route exact path="/" component={Login}></Route>
              <Route path='/index' component={Index}></Route>
              <Route path='/ForgetPassword' component={ForgetPassword}></Route>
      </Fragment>
    )
  }
}


