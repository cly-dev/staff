import React, { Component,createRef} from 'react'
import { Input, Table,Space,Button} from 'antd';
import {getAllOrder,searchOrder,deleteOrder} from "../../../axios";
import {message} from '../../../api';
import './watch.scss';
const { Search } = Input;
export default class watch extends Component {
    constructor(props){
      super(props);
      this.TableRef=createRef();
      this.search=false;
      this.action=(text)=>(
                  <Space>
                      <Button onClick={()=>this.handleChange(text)}>修改</Button>
                      <Button onClick={()=>this.handleDelete(text)}>删除</Button>
                  </Space>
      )
      this.obj={
        //表格数据
        data:[],
      //总条数
        total:0,
      //当前所在页码
        current:1,
      }
      this.columns= [
        {
          title: '商品名',
          dataIndex: 'name',
          align:'center',
          key:'name'
        },{
          title:'时间',
          dataIndex:'createTime',
          align:'center',
          key:'createTime'

        },{
          title: '数量',
          dataIndex: 'num',
          align:'center',
          key:'num'

        },
        {
          title: '价格(元)',
          dataIndex:'price',
          align:'center',
          key:'price'
        },{
          title:'备注',
          dataIndex:'mark',
          align:'center',
          key:'mark',
        },{
          title:'操作',
          align:'center',
          render:text=>this.action(text),
          key:'func'
        }
      ];
    }
    state = {
        ...this.obj,
      //搜索内容
        contont:''
      }; 
    //修改事件
    handleChange=value=>{
      this.props.history.push(`/index/changeOrder/${value._id}`);
    }
    //删除事件
    handleDelete=async value=>{
      const {data}=this.state;
      const result=await deleteOrder(value._id);
      if(result.code==='200'){
        this.setState({
          data:data.filter(item=>item._id!==value._id),
          total:this.state.total-1
        })
        if(this.state.total>=8){
          await this.handlePageNum(this.state.current)
        }
        message("删除成功",'success');
      }else{
        message(result.msg);
      }
     
    }
    //搜索事件   
    handleSearch=async value=>{
      this.search=true;
      const result=await searchOrder(1,value);
      if(result.code==='200'){
        message('共找到'+result.pageSize+'记录','success');
        result.data.forEach(value=>{
          value.key=value._id;
        })
        this.setState({
          data:result.data,
          total:result.pageSize,
          contont:value,
          current:1
        })
      }else{
        message(result.msg);
      }
    }
    //清除输入框内容
    handleInput=()=>{
      if(this.TableRef.current.state.value===''){
        this.setState({...this.obj});
        this.search=false;
      }
    }
    //切换页码事件
    handlePageNum=async (page,pageSize)=>{
      let result;
      if(!this.search){
        result=await getAllOrder(page);
      }else{
        result=await searchOrder(page,this.state.contont);

      }
      this.setState({
        data:result.data,
        current:page
      })
      
    }
    //生命周期
    componentDidMount(){
      getAllOrder(1).then(res=>{
        this.obj.data=res.data;
        this.obj.total=res.pageSize
        res.data.forEach(value=>{
            value.key=value._id;
        })
        this.setState({
          data:res.data,
          total:res.pageSize
        })
      })
    }
    render() {
        return (
            <section className="search-container">
                <section className="search-header">
                        查询销量
                </section>
                <section className="search-input">
                    <Search size="large" placeholder="请输入商品名称/日期"  ref={this.TableRef} onKeyUp={this.handleInput}  onSearch={this.handleSearch} enterButton />
                </section>
                <section className="search-data">
                    <Table
                     pagination={
                       {
                        defaultCurrent:1,
                        defaultPageSize:8,
                        hideOnSinglePage:true,
                        responsive:true,
                        total:this.state.total,
                        onChange:this.handlePageNum,
                        current:this.state.current
                       }
                     }
                     columns={this.columns} dataSource={this.state.data} />
                </section>
            </section>
        )
    }
}
