import React, { Component} from 'react';
import List from "../../../components/List/list.jsx";
import {Admin} from "../../../axios";
import {message} from "../../../api";
const {findAllStaff,handleSuspend,handleKick,handleRecover}=Admin;
class stafflist extends Component {
  constructor(props){
    super(props);
    this.state={
      //数据列表
      listData:[],
      //条数
      total:0,
    }
  }
  //解雇
  handleDismissal=async val=>{
    const data=await handleKick(val.userId);
    if(data.code==='200'){
      message('已解雇','success');
      this.handleLocalChange(val.userId,-2);
    }else{
      message(data.msg);
    }
  }
  //停职
  handleSuspension=async val=>{
    const data=await handleSuspend(val.userId);
    if(data.code==='200'){
      message('已停职','success');
      this.handleLocalChange(val.userId,-1);
    }else{
      message(data.msg);
    }
  };
  //恢复
  handleRecover=async val=>{
    const data=await handleRecover(val.userId);
    if(data.code==='200'){
      message('已恢复','success');
      this.handleLocalChange(val.userId,1);
    }else{
      message(data.msg);
    }
  }
  //页码改变事件
  handlePageNum=val=>{
    this.handlegetStaff(val);
  }
  //改变对应数据用户的状态
  handleLocalChange=(userId,status)=>{
    const {listData}=this.state;
    const obj=listData.find(value=>value.userId===userId);
    obj.status=status;
    this.setState({
      listData
    })
  }
  //获取员工
  handlegetStaff=async pageNum=>{
    const data=await findAllStaff(pageNum);
    data.data.forEach(value=>{
      value.key=value._id;
    })
    if(data.data.length){
      this.setState({
        listData:data.data,
        total:data.pageSize
      })
    }
  }
  componentDidMount(){
    this.handlegetStaff(1);
  }
    render() {
        return (
            <List handleDismissal={this.handleDismissal} handleRecover={this.handleRecover} handleSuspension={this.handleSuspension} data={this.state.listData} page={this.handlePageNum} total={this.state.total} pageSize={8}></List>
        );
    }
}

export default stafflist;
