import {Fragment} from 'react';
import {Route} from "react-router-dom";
import Login from "./pages/Staff/login/login.jsx";
import React, { Component } from 'react'
import message  from "./api/message";
import Index from"./pages/Staff/index/index.jsx";
export default class App extends Component {
  static getDerivedStateFromError(error){
    // eslint-disable-next-line no-unused-expressions
    error?message('网络错误,请稍后再试'):'';
  }
  render() {
    return (
      <Fragment>
              <Route exact path="/" component={Login}></Route>
              <Route path='/index' component={Index}></Route>
      </Fragment>
    )
  }
}


