import React,{useState,useEffect} from 'react'
import {Table,Popconfirm,Button,Space,Modal,Input} from "antd"

export default function ApplyList() {
  const [isModalVisible, setIsModalVisible] = useState(false)
    const columns = [
        {title:'姓名',dataIndex:'name',key:'name'},
        { title: '标题', dataIndex: 'title', key: 'title'},
        { title: '时间', dataIndex: 'time', key: 'time' },
        {title:'累积请假数',dataIndex:'leaveNum',key:'leaveNum'},
        { title: '天数', dataIndex: 'num', key: 'num' },
        { title: '类型', dataIndex: 'type', key: 'type' },
        { title: '状态', dataIndex: 'status', key: 'status',
        render:record=>{
          let text='';
          switch(record){
            case '0':text='审核中';break;
            case '1':text="已通过";break;
            case '-1':text="已撤销";break;
            case '-2':text='已驳回';break;
            default:break;
          }
          return text;
          
        }
      },
        {
          title: '操作',
          dataIndex: '',
          key: 'x',
          render: text =>{
            let El="";
            const Dismissal=()=>(
              <Popconfirm cancelText='取消' okText="确定" onConfirm={()=>handleDelete(text)} title="是否驳回">
                <Button type="danger" >驳回</Button>
              </Popconfirm>
            )
            if(text.status==='0'){
              El=(
                  <Space>
                      <Button type="primary">通过</Button>
                      <Dismissal></Dismissal>
                  </Space>
              )
            }else if(text.status==='1'){
              El=<Dismissal></Dismissal>
            }else {
              El='无法操作'
            }
            return El;  
          }
        },
      ];
    columns.forEach(value=>{
        value.align='center';
      })
    const data = [
        {
          key: 1,
          status:'0',
          title: 'John Brown',
          num:'32/62',
          time:'2018年',
          content: 'New York No.  Lake Park',
        },
        {
          key: 2,
          status:'1',
          title: 'John Brown',
          num:'32/62',
          time:'2018年',
          content: 'New York No. 1 Lake Park',
        },
        {
          key: 3,
          status:'-2',
          title: 'John Brown',
          num:'32/62',
          time:'2018年',
          content: 'New York No. 1 Lake Park',
        },
        {
          key: 4,
          status:'-1',
          title: 'John Brown',
          num:'32/62',
          time:'2018年',
          content: 'New York No. 1 Lake Park',
        },
      ];
    let applyId="";
    //点击驳回事件
    function handleDelete(val){
        setIsModalVisible(true);
    }
    //弹出框确认事件
    function handleTurn(){
      console.log("lll")
    }
    return (
        <section>
            <Table
                columns={columns}
                dataSource={data}
            >
            </Table>
            <Modal title="请输入驳回原因" visible={isModalVisible} okText="确定" cancelText="取消" onCancel={()=>setIsModalVisible(false)} onOk={handleTurn}>
              <Input placeholder="请输入原因"></Input>
            </Modal>
        </section>
    )
}
