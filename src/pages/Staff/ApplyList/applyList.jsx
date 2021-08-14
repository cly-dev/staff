import React, { Component } from 'react';
import {Table,Space,Button} from 'antd';
import {message} from '../../../api';
import {Apply,receptionTurn} from "../../../socket";
import {Staff} from "../../../axios";
import "./applyList.scss";
const {getApplyByPageNum,Repeal,RefMore,DeleteApply}=Staff;
class applyList extends Component {
    constructor(props){
        super(props)
        this.action=(text)=>{
            let El='';
            switch(text.status){
                case '-1':El=(
                            <Space>
                                <Button onClick={()=>this.handleModic(text)}>修改</Button>
                                <Button onClick={()=>this.handleDelete(text)} type="danger">删除</Button>
                                <Button onClick={()=>this.handleRef(text)} type="primary">重新提交</Button>
                            </Space>
                            );break;
                case '0':El=(
                                <Space>
                                    <Button  onClick={()=>Apply(text)}>催办</Button>
                                    <Button type="danger" onClick={()=>this.handleReal(text)}>撤销</Button>
                                </Space>
                            );break;
                case '1':El=<Button  type="danger" onClick={()=>this.handleReal(text)}>撤销</Button>;break;
                default: El=(<Space> 
                                <Button>查看理由</Button>
                                <Button onClick={()=>this.handleDelete(text)} type="danger">删除</Button>
                            </Space>)
            }
            return El; 
        }
        this.columns= [
           {
              title:'开始时间',
              dataIndex:'time',
              align:'center',
              key:'createTime'
            },{
              title: '天数',
              dataIndex: 'num',
              align:'center',
              key:'num'
    
            },
            {
              title: '类型',
              dataIndex:'type',
              align:'center',
              key:'type'
            },{
                title:'状态',
                align:'center',
                dataIndex:'statusText',
                key:'statusText'
            },{
              title:'操作',
              align:'center',
              render:text=>this.action(text),
              key:'func'
            }
          ];
        this.state={
            listData:[],
            total:0
        }
    }
    //修改申请
    handleModic=async val=>{
       console.log(await DeleteApply(val._id));
        this.props.history.push({
            pathname:'/index/Apply',
            state:{info:val}
        })
        
    }
    //删除申请
    handleDelete=async val=>{
        const result=await DeleteApply(val._id);
        if(result.code==='200'){
            message("删除成功",'success');
            setTimeout(()=>{
                window.location.reload();
            },2000)
        }
    }
    //撤销申请
    handleReal=async val=>{
        const result=await Repeal(val._id);
        const {listData}=this.state;
        const obj=listData.find(value=>val._id===value._id);
        obj.status='-1';
        obj.statusText='已撤销';
        if(result.code==='200'){
            val.status='-1';
            this.setState({
                listData
            })
            message("撤销成功",'success');
        }
    }
    //重新提交
    handleRef=async val=>{
        const {listData}=this.state;
        const result=await RefMore(val._id);
        if(result.code==='200'){
            const obj=listData.find(value=>val._id===value._id);
            obj.status='0';
            this.setState({
                listData
            })
            message("提交成功",'success');
        }else{
            message(result.msg);

        }
    }
    //获取通知
    handleGetList=async pageNum=>{
        const result=await getApplyByPageNum(pageNum);
        if(result.data){
            result.data.forEach(value=>{
                if(value.status==='0'){
                    value.statusText="审核中";
                }else if(value.status==='-1'){
                    value.statusText="已撤销";
                }else if(value.status==='-2'){
                    value.statusText='已驳回';
                }else if(value.status==='1'){
                    value.statusText='已通过';
                }
                value.key=value._id;
            })
            this.setState({listData:result.data,total:result.pageSize});
        }
    }
    componentDidMount(){
        this.handleGetList(1);
        //webSocket即时消息
        receptionTurn(data=>{
            const listData=[...this.state.listData];
            const obj=listData.find(value=>value===data.applyId);
            if(data.type!=='pass'){
                obj.status='-2';
            }else{
                obj.staus='1';
            };
            this.setState({
                listData
            });
        })
    }
    render() {
        return (
            <section className="applyList-container">
                <section className="applyList-header">
                    我的申请
                </section>
                <section className="applyList-mainer">
                <Table
                     pagination={
                       {
                        defaultCurrent:1,
                        defaultPageSize:6,
                        hideOnSinglePage:true,
                        responsive:true,
                        total:this.state.total,
                        onChange:pageNum=>{
                            this.handleGetList(pageNum);
                        },
                        // current:this.state.current
                       }
                     }
                     dataSource={this.state.listData}
                     columns={this.columns}  />
                </section>
            </section>

        );
    }
}

export default applyList;
