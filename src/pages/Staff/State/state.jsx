import React, { Component} from 'react'
import { Table} from 'antd';
import Descript from '../../../components/Descript/Descript.jsx';
import "./state.scss";
import {pdf} from '../../../api';
  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];
export default class State extends Component {
  constructor(props){
    super(props);
    this.columns = [
      { title: '年份', dataIndex: 'name', key: 'name',align: 'center', },
      { title: '出单数', dataIndex: 'age', key: 'age',align: 'center'},
      { title: '销售量', dataIndex: 'address', key: 'address',align: 'center'},
      {
        title: '操作',
        dataIndex: '',
        key: 'x',
        align: 'center',
        render: (text) => <a onClick={()=>this.handleMarkReport(text)}>生成报表</a>,
      },
    ]
  }
  handleMarkReport=text=>{
    console.log(text);
    console.log(this.table);
  }
    render() {
        return (
            <section className="state-container">
                <section className="state-header">
                    生成报表
                </section>
                <section className="state-mainer">
                    <Table
                        columns={this.columns}
                        dataSource={data}
                        expandable={{
                        expandedRowRender: record =><Descript desc={record.description} record={record}></Descript>,
                        rowExpandable: record =>true,
                        }}
                    />,
                </section>
            </section>
        )
    }
}
