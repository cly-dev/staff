import React, { Component } from 'react'
import { List, Avatar, Button,Space} from 'antd';
import "./NewNotice.scss"
import {Staff} from "../../../axios";
import { message } from '../../../api';
import {receptionNotice} from "../../../socket";
const {getNoticeByDate,readNotice}=Staff;
export default class NewNotice extends Component {
    state={
        listData:[],
        total:0
    }
    handleGetNotice=async pageNum=>{
        const {listData}=this.state;
        listData.length=0;
        const date=new Date();
        let time=`${date.getFullYear()}年-${date.getMonth() + 1 }月-${date.getDate()}日`;
        const result=await getNoticeByDate(pageNum,time);
        console.log(result);
        if(result.data){
            result.data.forEach(value=>{
                listData.push({...value,...value.admin,...value.notice});
            })
            this.setState({
                listData,
                total:result.pageSize
            })
        }
      
    }
    handleRead=async (val,index)=>{
        const {listData}=this.state;
        console.log(val);
        const result=await readNotice(val._id);
        if(result.code==='200'){
            listData[index].status='1';
            message("读取成功",'success');
            this.setState({
                listData
            })
        }else{
            message(result.msg);
        }
    }
    //生命周期
    componentDidMount(){
        this.handleGetNotice(1);
        const {listData}=this.state;
        receptionNotice(data=>{
            if(data){
                listData.pop();
                data.createTime='刚刚';
                listData.unshift(data);
                this.setState({listData})
            }
        })
    }
    render() {
        return (
           <>
                {}
                {/* <Skeleton active> */}
                <List
                        locale={{emptyText:this.state.total===0?'暂无信息':''}}
                        header={<h2 style={{textIndent:20}}>今日有{this.state.total}条消息</h2>}
                        itemLayout="horizontal"
                        size="large"
                        pagination={{
                        onChange: page => {
                            this.handleGetNotice(page);
                        },
                        total:this.state.total,
                        pageSize: 5,
                }}
                dataSource={this.state.listData}
                renderItem={(item,index) => (
                <List.Item
                    key={item._id}
                 >
                <List.Item.Meta
                avatar={<Avatar src={item.imgPath} />}
                title={item.title}
                description={<Space>{item.name}{item.position}<span style={{color:'black'}}>{item.createTime}</span></Space>}
                />
                {item.content}
                <section className="btn-container">
                    <Space style={{float:'right'}}>
                    <Button type="primary" disabled={item.status>0} onClick={()=>this.handleRead(item,index)}>{item.status===0?'未':'已'}读</Button>
                    </Space>
                </section>
            </List.Item>
            )}
        />,
        {/* </Skeleton> */}
           </>
        )
    }
}
