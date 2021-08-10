import React, { Component } from 'react';
import { Statistic, Row, Col,Card,Table, Tag, Space } from 'antd';
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
let month=[];
for(let i =1;i<=12;i++){
    month.push(i+'月');
}
const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align:'center',
      render: text => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align:'center',
    },
    {
      title: '年度总销售额',
      dataIndex: 'address',
      key: 'address',
      align:'center',
    },
  ];
  
  const data = [
    {
        key: '8',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
    {
        key: '5',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '6',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
class performance extends Component {
    componentDidMount(){
        echarts.use(
            [TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer]
        );
        const chartDom = document.querySelector('.echarts-container');
        const myChart = echarts.init(chartDom);
        let option;
        option = {
        title: {
            text: '企业历年销售额'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['2018', '2019', '2020', '2021']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: month
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '2018',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '2019',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '2020',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '2021',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            
        ]
    };
    option && myChart.setOption(option);
  
    }
    render() {
        return (
            <section className="performance-container">
                <section className="echarts-container">

                </section>
                <section className="info-container">
                    <section className="data-info">
                            <section className="data-box">
                                <Statistic style={{height:'300',fontSize:20}} title="2021年总销售额" value={112893} />
                                <Statistic style={{height:'300',}} title="2020年总销售额" value={112893}  />
                            </section>
                            <section className="statistic-box">
                                    <Card style={{height:'100%'}}>
                                    <Statistic
                                        title="同比"
                                        value={11.28}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                    </Card>
                        </section>
                    </section>
                    <section className="user-info">
                    <Table
                    style={{maxHeight:50}}
                     pagination={{
                         pageSize:6
                     }}
                     columns={columns} 
                     dataSource={data} />   
                    </section>
                </section>
            </section>
        );
    }
}

export default performance;
