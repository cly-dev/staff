import React, { Component} from 'react';
import AdminDescript from "../AdminDescript/AdminDescript";
import { Table,Space,Button,Popconfirm} from 'antd';
class stafflist extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.columns = [
      { title: '工号', dataIndex: 'userId', key: 'userId'},
      { title: '姓名', dataIndex: 'username', key: 'username'},
      { title: '电话', dataIndex: 'age', key: 'age' },
      { title: '家庭住址', dataIndex: 'address', key: 'address' },
      { title: '性别', dataIndex: 'sex', key: 'sex' },
      {
        title:'入职时间',dataIndex:'joinTime',key:'joinTime'
      },
      {
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: text =>{
          let El='';
          const status=text.status;
          const Dismissal=()=>(
                <Popconfirm  cancelText='取消' okText="确定" onConfirm={()=>this.props.handleDismissal(text)} title="一旦解雇无法恢复,确定解雇此人">
                  <Button type="danger"  >解雇</Button>
                </Popconfirm>
          )
          if(status>=0){
              El=(
                  <Space>
                      <Button onClick={()=>this.props.handleSuspension(text)}>停职</Button>
                      <Dismissal></Dismissal>
                  </Space>
              )
          }else if(status===-1){
              El=(
                  <Space>
                      <Button type="primary" onClick={()=>this.props.handleRecover(text)}>恢复</Button>
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
                          expandedRowRender: record =><AdminDescript record={record}></AdminDescript>,
                          rowExpandable: record => record.status !==-2
                        }}
                        dataSource={this.props.data}
                    />
            </section>
        );
    }
}

export default stafflist;
