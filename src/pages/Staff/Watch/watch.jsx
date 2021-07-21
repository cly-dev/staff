import React, { Component } from 'react'
import { Input, Table,Space,Button} from 'antd';
import './watch.scss';
const { Search } = Input;
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      time:'2018年',
      num:20,
      price: 32,
      mark: `London, Park Lane no. ${i}`,
    });
  }

export default class watch extends Component {
    constructor(props){
      super(props);
      this.action=(text)=>(
                  <Space>
                      <Button onClick={()=>this.handleChange(text)}>修改</Button>
                      <Button onClick={()=>this.handleDelete(text)}>删除</Button>
                  </Space>
      )
      this.columns= [
        {
          title: '商品名',
          dataIndex: 'name',
          align:'center'

        },{
          title:'时间',
          dataIndex:'time',
          align:'center'

        },{
          title: '数量',
          dataIndex: 'num',
          align:'center'

        },
        {
          title: '价格(元)',
          dataIndex:'price',
          align:'center'

        },{
          title:'备注',
          dataIndex:'mark',
          align:'center'
        },{
          title:'操作',
          align:'center',
          render:text=>this.action(text)
        }
      ];
    }
    state = {
        data:[],
      }; 
    //修改事件
    handleChange=value=>{
      this.props.history.push(`/index/changeOrder/${1}`);
    }
    //删除事件
    handleDelete=value=>{
      console.log(value);
    }
    //搜索事件   
    handleSearch=value=>{
        console.log(value);
    }
    render() {
        return (
            <section className="search-container">
                <section className="search-header">
                        查询销量
                </section>
                <section className="search-input">
                    <Search size="large" placeholder="请输入商品名称/日期" onSearch={this.handleSearch} enterButton />
                </section>
                <section className="search-data">
                    <Table 
                     columns={this.columns} dataSource={data} />
                </section>
            </section>
        )
    }
}
