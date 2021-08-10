import React, { Component} from 'react';
import Descript from "../Descript/Descript";
import propTypes from "prop-types";
import { Table,Space,Button,Popconfirm} from 'antd';
class stafflist extends Component {
  constructor(props){
    super(props);
    this.columns = [
      { title: '工号', dataIndex: 'name', key: 'name'},
      { title: '姓名', dataIndex: 'name', key: 'name'},
      { title: '电话', dataIndex: 'age', key: 'age' },
      { title: '家庭住址', dataIndex: 'address', key: 'address' },
      { title: '性别', dataIndex: '男', key: 'address' },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: text =>{
          let El='';
          const status=text.status;
          const Dismissal=()=>(
                <Popconfirm cancelText='取消' okText="确定" onConfirm={()=>this.handleDismissal(text)} title="是否解雇此人">
                  <Button type="danger" >解雇</Button>
                </Popconfirm>
          )
          if(status>=0){
              El=(
                  <Space>
                      <Button onClick={()=>this.handleSuspension(text)}>停职</Button>
                      <Dismissal></Dismissal>
                  </Space>
              )
          }else if(status===-1){
              El=(
                  <Space>
                      <Button type="primary" onClick={()=>this.handleRecover(text)}>恢复</Button>
                      <Dismissal></Dismissal>
                  </Space>
              )
          }else{
              El='已解雇...'
          }
          return El;
          },
      },
    ];
    this.columns.forEach(value=>{
      value.align='center';
    })
  }
  //解雇
  handleDismissal=val=>{
    console.log(val);
  }
  //停职
  handleSuspension=val=>{
    console.log(val);
  }
  //恢复
  handleRecover=val=>{
    console.log(val);
  }
    render() {
        return (
            <section>
                    <Table

                        columns={this.columns}
                        pagination={{
                            total:this.props.total,
                            pageSize:this.props.pageSize?this.props.pageSize:8,
                            onChange:val=>this.props.page(val)
                        }}
                        expandable={{
                          expandedRowRender: record =><Descript record={record}></Descript>,
                          rowExpandable: record => record.status !==-2
                        }}
                        dataSource={this.props.data}
                    />
            </section>
        );
    }
}

export default stafflist;
