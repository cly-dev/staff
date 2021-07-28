import React, { Component} from 'react'
import { Table,Modal,Descriptions} from 'antd';
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
  state={
      visible:false,
  }
  handleMarkReport=text=>{
    this.setState({visible:true});
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
                {/* 
                pdf弹出预览框
                */}
                <Modal
                    title="预览"
                    centered
                    cancelText="取消"
                    okText="确定"
                    visible={this.state.visible}
                    onOk={() =>pdf()}
                    onCancel={() =>this.setState({visible:false})}
                    width={1000}
                >
                <section id="psf-prient">
                  {/*描述*/}
                    <Descriptions
                      bordered
                    >
                      <Descriptions.Item label="姓名">Cloud Database</Descriptions.Item>
                      <Descriptions.Item label="性别">Prepaid</Descriptions.Item>
                      <Descriptions.Item label="年龄">18:00:00</Descriptions.Item>
                      <Descriptions.Item label="年份">$80.00</Descriptions.Item>
                      <Descriptions.Item label="月平均销量">$20.00</Descriptions.Item>
                      <Descriptions.Item label="月最高销量">$60.00</Descriptions.Item>
                      <Descriptions.Item label="总销量">
                        Data disk type: MongoDB
                        <br />
                        Database version: 3.4
                        <br />
                        Package: dds.mongo.mid
                        <br />
                        Storage space: 10 GB
                        <br />
                        Replication factor: 3
                        <br />
                        Region: East China 1<br />
                      </Descriptions.Item>
                    </Descriptions>
                    </section>
                  </Modal>
            </section>
        )
    }
}
