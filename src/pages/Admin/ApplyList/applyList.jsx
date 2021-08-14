import React,{useState,useEffect,useRef} from 'react'
import {Table,Popconfirm,Button,Space,Modal,Input} from "antd"
import {Admin} from "../../../axios";
import {message} from "../../../api";
import {Audit,receptionApply} from "../../../socket";
const {getAllApply,applyPass,applyTurn}=Admin;
export default function ApplyList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataList,setData]=new useState([]);
  const [total,setTotal]=new useState(0);
  const [applyId,setApplyId]=new useState('');
  const [userId,setUserId]=new useState('');
  const dataRef=new useRef();
  const input=new useRef();
  dataRef.current=dataList;
    const columns = [
        {title:'姓名',dataIndex:'username',key:'username'},
        { title: '标题', dataIndex: 'title', key: 'title'},
        { title: '时间', dataIndex: 'time', key: 'time' },
        { title: '天数', dataIndex: 'num', key: 'num' },
        { title: '内容', dataIndex: 'desc', key: 'desc' },
        { title: '类型', dataIndex: 'type', key: 'type' },
        { title: '状态', key: 'status',
        render:record=>{
          let text='';
          switch(record.status){
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
                      <Button type="primary" onClick={()=>handlePass(text)}>通过</Button>
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
  
    //点击驳回事件
    function handleDelete(val){
        setUserId(val.userId);
        setApplyId(val._id);
        setIsModalVisible(true);
    }
    //确认驳回事件
   async  function handleTurn(){
     if(input.current.state.value){
      const data=await applyTurn(applyId,input.current.state.value);
      if(data.code==='200'){
        message("驳回成功",'success');
        handleLocalChange(applyId,'-2');
        setIsModalVisible(false);
        input.current.state.value="";
        Audit({type:'turn',message:'您的一条申请消息被驳回',userId,applyId});
      }
     }else{
        message("请输入驳回理由")
     }
    }
    //通过申请
    const handlePass=async text=>{
        const data=await applyPass(text._id);
        console.log(data);
        if(data.code==='200'){
          message("申请通过",'success');
          handleLocalChange(text._id,'1');
          Audit({type:'pass',message:'您的一条申请消息通过',userId,applyId});
        }else{
          message(data.msg);
        }
    }
    

    //改变本地数据的状态
    const handleLocalChange=(id,status)=>{
      let obj=dataList.find(value=>value._id===id);
      console.log(obj);
      obj.status=status;
      let index=0;
      for(let i=0;i<dataList.length;i++){
        if(dataList[i]._id===id){
            index=i;
        }
      }
     let arr=[...dataList];
      arr[index].status=status;
      // console.log(obj);
      setData(arr);
    }
    //生命周期
    new useEffect(()=>{
      handleGetDataByPage(1);
      //websocket即时获取申请信息
      receptionApply(data=>{
        if(data){
          let arr=[...dataList];
          arr.pop();
          arr.shift(data);
          setData(arr);
        }
      })
    },[dataRef])
    //根据页码获取数据
   const handleGetDataByPage=async page=>{
     let arr=[];
     const data=await getAllApply(page);
     if(data.data){
      data.data.forEach(value=>{
        value.key=value._id;
        arr.push({...value,...value.staff});
      })
      setData(arr);
      setTotal(data.pageSize)
    }
   }
    return (
        <section>
            <Table
                pagination={{
                  total,
                  onChange:page=>{handleGetDataByPage(page)}
                }}
                columns={columns}
                dataSource={dataList}
            >
            </Table>
            <Modal title="请输入驳回原因" visible={isModalVisible} okText="确定" cancelText="取消" onCancel={()=>setIsModalVisible(false)} onOk={handleTurn}>
              <Input placeholder="请输入原因" ref={input} ></Input>
            </Modal>
        </section>
    )
}
