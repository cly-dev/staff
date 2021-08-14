import React, { Component } from 'react';
import { Statistic,Card,Table} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components';
import {
    LineChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';
import "./performance.scss";
import {Admin} from "../../../axios";
import { option } from '../../../api';
const {getOrderCountByMonth, getOrderCount,getOrderByEvery}=Admin;
let month=[];
const newYear =new Date().getFullYear();
const newMonth = new Date().getMonth()+1;

const columns = [
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
      align:'center',
 
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align:'center',
    },
    {
      title: '年度总销售额',
      dataIndex: 'orderSum',
      key: 'orderSum',
      align:'center',
    },
  ];

class performance extends Component {
    constructor(props){
        super(props);
        this.state={
            series:[],
            lastYear:0,
            newYear:0,
            listData:[]
        }
    }
    //echarts加载图数据
    handlegetOrderByMonth=async()=>{
        let dataList=[];
        for(let i =1;i<=12;i++){
            month.push(i+'月');
        }
        option.xAxis.data=month
        for(let i=2018;i<newYear;i++){
                for(let j=1;j<=12;j++){
                    let data=await getOrderCountByMonth({year:i,month:j});
                    dataList.push(data.data?data.data.Count:0);
                }
        }
        for(let k=1;k<=newMonth;k++){
            let data=await getOrderCountByMonth({year:newYear,month:k});
            dataList.push(data.data?data.data.Count:0)
        }
        let n=0;
        for(let i=2018;i<=newYear;i++){
            option.legend.data.push(''+i);
            option.series.push({
                name:''+i,
                type:'line',
                stack:'总量',
                data:dataList.slice(n * 12, 12*(n+1))
            })
            n++;
        }
        echarts.use(
            [TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer]
        );
        const chartDom = document.querySelector('.echarts-container');
        const myChart = echarts.init(chartDom);
        option && myChart.setOption(option);
        console.log(option.series);
        this.forceUpdate();
        }

    //按照排名获取每个员工的年度销售额
    handlegetOrderList=async pageNum=>{
        const listData=[...this.state.listData];
        const data=await getOrderByEvery(newYear,pageNum);
        if(data.data){
            data.data.forEach(value=>{
                listData.push({...value.user,...value,key:value._id});
            })
            console.log(listData);
            this.setState({
                listData
            })
            
        }
    }
    //获取年度销售额
    handlegetCount=async ()=>{
        const data=await Promise.all([getOrderCount(newYear),getOrderCount(newYear - 1)]);
        if(data){
            this.setState({
                newYear:data[0].data.Count,
                lastYear:data[1].data.Count,
            })
        }
    }
    //生命周期
    componentDidMount(){
        this.handlegetOrderByMonth();
        this.handlegetCount();
        this.handlegetOrderList(1);
    }
    componentWillUnmount(){
        option.series.length=0;
    }
    render() {
        console.log("加载完成");
        return (
            <section className="performance-container">
                <section className="echarts-container">

                </section>
                <section className="info-container">
                    <section className="data-info">
                            <section className="data-box">
                                <Statistic style={{height:'300',fontSize:20,textAlign:'center'}} title="2021年总销售额" value={this.state.newYear} />
                                <Statistic style={{height:'300',textAlign:'center'}} title="2020年总销售额" value={this.state.lastYear}  />
                            </section>
                            <section className="statistic-box">
                                    <Card style={{height:'100%'}}>
                                    <Statistic
                                        title="同比"
                                        value={((this.state.newYear -this.state.lastYear)/this.state.newYear) * 100}
                                        precision={2}
                                        valueStyle={{color:this.state.newYear -this.state.lastYear>0?'#cf1322':'#3f8600'}}
                                        prefix={this.state.newYear -this.state.lastYear>0?<ArrowUpOutlined />:<ArrowDownOutlined/>}
                                        suffix="%"
                                    />
                                    </Card>
                        </section>
                    </section>
                    <section className="user-info">
                    <Table
                    style={{maxHeight:50}}
                     pagination={{
                         pageSize:6,
                         onChange:page=>{
                             this.handlegetOrderList(page)
                         }
                     }}
                     columns={columns} 
                     dataSource={this.state.listData} />   
                    </section>
                </section>
            </section>
        );
    }
}

export default performance;
