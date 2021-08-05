import React, { PureComponent} from 'react'
import { Table,Modal,Descriptions} from 'antd';
import {getStateByage} from "../../../axios";
import Store from "../../../redux/store";
import Descript from '../../../components/Descript/Descript.jsx';
import "./state.scss";
import {pdf} from '../../../api';
export default class State extends PureComponent {
  constructor(props){
    super(props);
    this.userInfo=Store.getState();
    this.columns = [
      { title: '年份', dataIndex: 'year', key: 'year',align: 'center', },
      { title: '出单数', dataIndex: 'total', key: 'total',align: 'center'},
      { title: '销售量', dataIndex: 'orderSum', key: 'orderSum',align: 'center'},
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
      data:[],
      text:{},
  }
  handlegetState=async ()=>{
    const data=[...this.state.data];
    let years=new Date().getFullYear();
    let joinYears=this.userInfo.joinTime.slice(0,4);
    while(joinYears<=years){
      // eslint-disable-next-line no-loop-func
        const result=await getStateByage(joinYears++);
        let total=0;
        let orderSum=0;
        let orderMax=0;
        let orderAvg=0;
        if(result.data[0]){
          total=result.data[0].orderTotal;
          orderSum=result.data[0].orderSum;
          orderMax=result.data[0].orderMax;
          orderAvg=result.data[0].orderAvg
        }
        data.push({
          year:`${joinYears-1}-${joinYears}`,
          name:this.userInfo.username,
          total,
          orderSum,
          orderMax,
          orderAvg,
          key:joinYears
        })
    }
   this.setState({
     data
   })
  }
  componentDidMount(){
      this.handlegetState();
  }
  handleMarkReport=text=>{
    console.log(text);
    this.setState({visible:true,text});
  }
    render() {
      console.log(this.state.data)
        return (
            <section className="state-container">
                <section className="state-header">
                    生成报表
                </section>
                <section className="state-mainer">
                    <Table
                        columns={this.columns}
                        dataSource={this.state.data}
                        expandable={{
                        expandedRowRender: record =><Descript  record={record}></Descript>,
                       
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
                      <Descriptions.Item label="姓名">{this.userInfo.username}</Descriptions.Item>
                      <Descriptions.Item label="性别">{this.userInfo.sex}</Descriptions.Item>
                      <Descriptions.Item label="年龄">{this.userInfo.age}</Descriptions.Item>
                      <Descriptions.Item label="年份">{this.state.text.year}</Descriptions.Item>
                      <Descriptions.Item label="月平均销量">{this.state.text.orderAvg}</Descriptions.Item>
                      <Descriptions.Item label="月最高销量">{this.state.text.orderMax}</Descriptions.Item>
                      <Descriptions.Item label="总销量">
                       {this.state.text.orderSum}
                      </Descriptions.Item>
                    </Descriptions>
                    </section>
                  </Modal>
            </section>
        )
    }
}
