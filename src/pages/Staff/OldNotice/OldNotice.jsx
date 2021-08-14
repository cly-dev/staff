import React from 'react'
import { List, Avatar, Button,Space} from 'antd';
import {Staff} from "../../../axios";
import {message} from "../../../api";
import "../NewNotice/NewNotice.scss";
import "./OldNotice.scss";
const {getNotice,readNotice,topNotice}=Staff;
export default class OldNotice extends React.Component {
    constructor(props){
        super(props);
        this.state={
            listData:[],
            total:0,
        }
    }
    //置顶
    handleTop=async val=>{
        const { listData}=this.state;
        const result=await topNotice(listData[val]._id);
        console.log(listData[val]._id);
        if(result.code==='200'){
            message('置顶成功',);
          
            window.location.reload();
        }else{
            message(result.msg);
        }
    }
    //点击读取
    handleRead=async (val,index)=>{
        const {listData}=this.state;
        console.log(val);
        const result=await readNotice(val._id);
        console.log(result);
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
    //获取通知
    handleGetNotice=async(pageNum)=>{
        const {listData}=this.state;
        listData.length=0;
        const result=await getNotice(pageNum);
        console.log(result);
        if(result.data){
            result.data.forEach(value=>{
                if(Array.isArray(value.resource)){
                value.resource=value.resource[0]   
                }
                listData.push({...value,...value.admin,...value.notice});
            })  
            this.setState({
                listData,
                total:result.pageSize
            })
        }
    }
    componentDidMount(){
        this.handleGetNotice(1);
    }
    render(){
    return (
        <section className="OldNotice-container">
            
            <section className="OldNotice-mainer">
                <List
                    locale={{emptyText:'暂无通知'}}
                            itemLayout="horizontal"
                            size="large"
                            pagination={{
                            total:this.state.total,
                            onChange:page => {
                                this.handleGetNotice(page)
                            },
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
                                <Button disabled={item.status===2} onClick={()=>this.handleTop(index)}>{item.status===2?'已':''}置顶</Button>
                                <Button type="primary" disabled={item.status>0} onClick={()=>this.handleRead(item,index)}>{item.status===0?'未':'已'}读</Button>
                            </Space>
                        </section>
                    </List.Item>
                    )}
                />, 
        </section>
        </section>
    )
                }
}
