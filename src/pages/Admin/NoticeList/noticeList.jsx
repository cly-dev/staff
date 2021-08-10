import React,{useState,useEffect} from 'react'
import {Table,Popconfirm,Button,Space} from "antd"

export default function noticeList() {
    const columns = [
        { title: '标题', dataIndex: 'title', key: 'title'},
        { title: '时间', dataIndex: 'time', key: 'time' },
        { title: '内容', dataIndex: 'content', key: 'content' },
        { title: '已读人数', dataIndex: 'num', key: 'num' },
        {
          title: '操作',
          dataIndex: '',
          key: 'x',
          render: text =>(
                        <Space> 
                            <Button onClick={()=>handleModic(text)}>修改</Button>
                            <Popconfirm okText="删除" cancelText="取消" title="确认删除此条通知?" onConfirm={()=>handleDelete(text)} ><Button type="danger">删除</Button></Popconfirm>
                        </Space>
                        )
        },
      ];
    columns.forEach(value=>{
        value.align='center';
      })
      const data = [
        {
          key: 1,
          title: 'John Brown',
          num:'32/62',
          time:'2018年',
          content: 'New York No.  Lake Park',
        },
        {
          key: 2,
          title: 'John Brown',
          num:'32/62',
          time:'2018年',
          content: 'New York No. 1 Lake Park',
        },
        {
          key: 3,
          title: 'John Brown',
          num:'32/62',
          time:'2018年',
          content: 'New York No. 1 Lake Park',
        },
        {
          key: 4,
          title: 'John Brown',
          num:'32/62',
          time:'2018年',
          content: 'New York No. 1 Lake Park',
        },
      ];
    function handleDelete(val){
        console.log(val);
    }
    function handleModic(val){
        console.log(val);
    }
    return (
        <section>
            <Table
                columns={columns}
                dataSource={data}
            >
            </Table>
        </section>
    )
}
