import React, { Component } from 'react';
import "./search.scss";
import { Input} from 'antd';
import List from "../../../components/List/list";
import {Admin}from "../../../axios";
import { message } from '../../../api';
const {findStaffBySearch,handleSuspend,handleKick,handleRecover}=Admin;
class Search extends Component {
    constructor(props){
      super(props);
      this.state={
        listData:[],
        content:'',
        total:0,
      }
    }
    //解雇事件
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
    handleLocalChange=(userId,status)=>{
      const {listData}=this.state;
      const obj=listData.find(value=>value.userId===userId);
      obj.status=status;
      this.setState({
        listData
      })
    }
    //搜索事件
    onSearch=async val=>{
       this.setState({
         content:val
       })
       this.handleSearch(1,val);
    }
    //页码改变事件
    handlePageNum=val=>{
        this.handleSearch(val,this.state.content)
      }
    //搜索结果事件
    handleSearch=async (data,pageNum)=>{
      const result=await findStaffBySearch(pageNum,data);
      if(result.data){
        result.data.forEach(value=>{
          value.key=value._id;
        })
        message(`找到${result.pageSize}条结果`,'success');
        this.setState({
          listData:result.data,
          total:result.pageSize
        })
    }else{
      message('没有找到相关的用户');
      this.setState({
        listData:[]
      })
    }
     
    }
    //页码
    render() {
        return (
            <section className="search-container">
                    <section className="search-header">
                        <section className="search">
                            <Input.Search placeholder="请输入用户姓名" size="large" onSearch={this.onSearch} enterButton />
                        </section>
                    </section>
                    <section className="search-mainer">
                        <List handleDismissal={this.handleDismissal} handleRecover={this.handleRecover} handleSuspension={this.handleSuspension} data={this.state.listData} page={this.handlePageNum} total={this.state.total} pageSize={7}></List>
                    </section>
            </section>
        );
    }
}

export default Search;
