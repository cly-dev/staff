import React,{useEffect,useState,useRef} from 'react'
import { Table,Space,Button,Popconfirm} from 'antd';
import {useHistory} from "react-router-dom";
import {Admin} from "../../../axios";
import {message} from "../../../api";
import Store from '../../../redux/store';
const {findAllAminInfo,handleFreezeStatus,handleRecoverStatus,handleDeleteStatus,handleReset}=Admin;
export default function AdminTer() {
    const columns = [
        { title: '账号', dataIndex: 'adminId', key: 'userId'},
        { title: '姓名', dataIndex: 'name', key: 'username'},
        { title: '电话', dataIndex: 'phone', key: 'phone' },
        { title: '职位', dataIndex: 'position', key: 'address' },
        { title: '权限', dataIndex: '', key: 'power',render:text=>{
                if(text.power==='1'){
                    return '高级管理员';
                }
                return '普通管理员';
            } 
        }, { title: '状态', dataIndex: '', key: 'address',render:text=>{
            if(text.status==='1' || text.status==='0'){
                return '正常';
            }else if(text.status==='-1'){
                return '已冻结';
            }else if(text.status==='-2'){
                return '已删除';
            }
        } },
        {
          title: '操作',
          key: 'x',
          render: text =>{ 
            const DeleleEl=()=>(
                            <Space>
                                    <Button onClick={()=>handleFreeze(text)}>冻结</Button>
                                    <Popconfirm okText="确定" cancelText="取消" title="一旦删除无法恢复,是否删除" onOk={()=>handleDelete(text)}>
                                            <Button type="danger">删除</Button>
                                    </Popconfirm>
                            </Space>
            )
            let El;
            // eslint-disable-next-line default-case
            switch(text.status){
                case '1':El=(
                    <Space>
                        <Button onClick={()=>handleResets(text)} type="primary">重置</Button>
                        <DeleleEl></DeleleEl>
                    </Space>);break;
                case '0':El=(
                        <DeleleEl></DeleleEl>
                    );break;
                case '-1':El=(
                        <Space>
                            <Button onClick={()=>handleRecover(text)} type="primary">恢复</Button>
                            <Popconfirm okText="确定" cancelText="取消" title="一旦删除无法恢复,是否删除" onOk={()=>handleDelete(text)}>
                                            <Button type="danger">删除</Button>
                            </Popconfirm>
                        </Space>);break;
                default:El='已删除';break;  
            }  
                return El;
            }
        },
      ];
    columns.forEach(value=>{
        value.align='center';
      })
    const history=useHistory();
    const [listData,setListData]=useState([]);
    const [total,setTotal]=useState(0);
    const DataRef=useRef();
    DataRef.current=listData;
    //点击冻结事件
   const handleFreeze= async (text)=>{
        const result=await handleFreezeStatus(text.adminId);
        if(result.code==='200'){
            message("冻结成功",'success');
            handleChangeStatus(text.adminId,'-1');
        }
   }
   //点击恢复事件
   const handleRecover=async (text)=>{
       const result=await handleRecoverStatus(text.adminId);
       if(result.code==='200'){
           message("恢复成功",'success');
           handleChangeStatus(text.adminId,'1');
       }
   }
   //点击删除事件
   const handleDelete=async(text)=>{
       const result=await handleDeleteStatus(text.adminId);
       if(result.code==='200'){
           message("删除成功",'success');
           handleChangeStatus(text.adminId,'-2');
       }
   }
    //点击重置事件
    async function handleResets(text){
        const result=await handleReset(text.adminId);
        if(result.code==='200'){
            message("重置成功",'success');
            handleChangeStatus(text.adminId,'0');
        }
    }
    //按照页码获取数据列表
   async function handleGetDatalist(pageNum){
        const data=await findAllAminInfo(pageNum);
        console.log(data);
        if(data.data){
            data.data.forEach(value=>{
                value.key=value._id;
            })
            setListData(data.data);
            setTotal(data.pageSize);
        }
    }
   
    //改变数据状态
    function handleChangeStatus(Id,status){
        let arr=[...listData];
        const obj=arr.find(value=>value.adminId===Id);
        obj.status=status;
        setListData(arr);
    }
    //生命周期
    useEffect(()=>{
        if(Store.getState()['admin'].power!=='2'){
            message("没有权限");
            setTimeout(()=>{
                history.goBack();
            },2000);
        }else{
            handleGetDatalist(1);
        }
    },[DataRef])
    return (
        <div>
           <Table
                columns={columns}
                pagination={{
                    total:total,
                    pageSize:8,
                    onChange:val=> handleGetDatalist(val)
                }}
                dataSource={listData}
            />
        </div>
    )
}
