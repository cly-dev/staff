import React, { Component,lazy, Suspense} from 'react';
import {Route,Link} from "react-router-dom"
import { Layout, Menu,Dropdown,notification} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,DownOutlined,LogoutOutlined} from '@ant-design/icons';
import "./index.scss";
import store from '../../../redux/store';
import {adminClear} from "../../../redux/action/admin";
import {AdminLogin,handleMsg, AdminLogOut}  from "../../../socket";
import { message } from '../../../api';
import UsePageViews from "../../../hook/usePageViews";
import { Admin } from '../../../axios';
const {handleDeletAdmin}=Admin;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const AddStaff=lazy(()=>import("../AddStaff/addStaff.jsx"));
const StaffList=lazy(()=>import("../StaffList/staffList.jsx"));
const Performance=lazy(()=>import("../Performance/performance.jsx"));
const Search=lazy(()=>import("../Search/search.jsx"));
const AddNotice=lazy(()=>import("../AddNotice/addNotice.jsx"));
const NoticeList=lazy(()=>import("../NoticeList/noticeList.jsx"));
const ApplyList=lazy(()=>import("../ApplyList/applyList.jsx"));
const AdminInfo=lazy(()=>import("../AdminInfo/adminInfo.jsx"));
const changeInfo=lazy(()=>import("../ChangeInfo/changeInfo.jsx"));
const changePassword=lazy(()=>import("../ChangePassword/changePassword.jsx"));
const AddAdmin=lazy(()=>import("../AddAdmin/addAdmin.jsx"));
const AdminTer=lazy(()=>import("../AdminTer/adminTer.jsx"));
const openNotificationWithIcon = (desc, duration = null) => {
    notification.warn({
        message: '提示',
        description: desc,
        duration,
        top: 200,
    });
};
class index extends Component {
    constructor(props){
        super(props);
        this.client='';
        this.menu=<Menu onClick={this.onClick}>
                    <Menu.Item key="1" icon={<UserOutlined />}><Link to='/admin-index/个人信息'>个人信息</Link></Menu.Item>
                    <Menu.Item key="2" icon={<LogoutOutlined />}>退出登录</Menu.Item>
                </Menu>
        this.info=store.getState()['admin'];
    }
    onClick = ({ key }) => {
        // message.info(`Click on item ${key}`);
        if(key==='2'){
            this.handleLoginOut();
        }
    };
    //退出登陆
    handleLoginOut=()=>{
        store.dispatch(adminClear());
        this.props.history.push("/admin");
        AdminLogOut(this.info.adminId);
    }
    //接收消息事件
    handleGetMsg=data=>{
        message(data,'info');
    }
    //生命周期-挂载时
    componentDidMount(){
        if(this.info){
            //管理员登录事件
            AdminLogin(this.info.adminId);
           this.client=handleMsg(this.handleGetMsg);
            //判断账号状态
            if (this.info.status ==='-1') {
                openNotificationWithIcon("该账号已被冻结,无法操作", 2);
                setTimeout(() => {
                    this.props.history.push('/admin');
                }, 2000);
            } else if (this.info.status === '0') {
                openNotificationWithIcon(`检查到您还未修改初始密码`, null);
            }else if(this.info.status==='2'){
                openNotificationWithIcon(`该账号已被停用,过会自动删除`,2);
                handleDeletAdmin().then(res=>{
                    if(res.code==='200'){
                        store.dispatch(adminClear());
                        AdminLogOut(this.info.adminId);
                        setTimeout(() => {
                            this.props.history.push('/admin');
                        }, 2000);
                    }
                }).catch(err=>{
                    new Error(err);
                })
            } 
        }else{
            message("还未登录,请先登录");
            this.props.history.push('/admin');
        }
    }
    //生命周期-卸载时
    componentWillUnmount(){
        this.client.off();
        notification.destroy();
        AdminLogOut(this.info.adminId);
    }
    render() {
        return (
            <section className="Aindex-container">
                 <Layout style={{height:'100vh'}}>
                    <Header className="header">
                        <section className="logo">
                            员工管理系统-管理员
                        </section>
                        <section className="info">
                            <Dropdown overlay={this.menu}>
                                <span className="info-name">{this.info.name}-{this.info.position}<DownOutlined style={{paddingLeft:5}} /></span>
                            </Dropdown>
                        </section>
                    </Header>
                    <Layout>
                    <Sider width={200}  className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.handleClick}
                        >
                        <SubMenu key="员工管理" icon={<UserOutlined />} title="员工管理">
                            <Menu.Item key="添加员工"><Link to="/admin-index/员工管理/添加员工">添加员工</Link></Menu.Item>
                            <Menu.Item key="查看员工"><Link to="/admin-index/员工管理/查看员工">查看员工</Link></Menu.Item>
                            <Menu.Item key="查看业绩"><Link to="/admin-index/员工管理/查看业绩">查看业绩</Link></Menu.Item>
                            <Menu.Item key="搜索"><Link to="/admin-index/员工管理/搜索">搜索</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="通知" icon={<NotificationOutlined />} title="通知">
                            <Menu.Item key="发布通知"><Link to='/admin-index/通知/发布通知'>发布通知</Link></Menu.Item>
                            <Menu.Item key="查看通知"><Link to="/admin-index/通知/查看通知">查看通知</Link></Menu.Item>
                            <Menu.Item key="审核"><Link to='/admin-index/通知/审核'>审核</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="工作台" icon={<LaptopOutlined />} title="工作台">
                            <Menu.Item key="修改信息"><Link to='/admin-index/工作台/修改信息'>修改信息</Link></Menu.Item>
                            <Menu.Item key="修改密码"><Link to='/admin-index/工作台/修改密码'>修改密码</Link></Menu.Item>
                            <Menu.Item key="添加管理"><Link to='/admin-index/工作台/添加管理'>添加管理</Link></Menu.Item>
                            <Menu.Item key="注销"><Link to='/admin-index/工作台/管理'>管理</Link></Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 20px 20px' }}>
                        <UsePageViews>
                        </UsePageViews>
                        <Content
                        className="site-layout-background"
                        style={{
                            backgroundColor:'white',
                            margin: 0,
                        }}
                        >
                        <Suspense fallback={<h1>加载失败</h1>}>
                            <Route path='/admin-index/员工管理/添加员工' component={AddStaff}></Route>  
                            <Route path='/admin-index/员工管理/查看员工' component={StaffList}></Route>         
                            <Route path='/admin-index/员工管理/查看业绩' component={Performance}></Route>                          
                            <Route path='/admin-index/员工管理/搜索' component={Search}></Route>
                            <Route path="/admin-index/通知/发布通知" component={AddNotice}></Route>
                            <Route path="/admin-index/通知/查看通知" component={NoticeList}></Route>
                            <Route path='/admin-index/通知/审核' component={ApplyList}></Route>
                            <Route path='/admin-index/个人信息' component={AdminInfo}></Route>
                            <Route path='/admin-index/工作台/修改信息' component={changeInfo}></Route>
                            <Route path='/admin-index/工作台/修改密码' component={changePassword}></Route>
                            <Route path='/admin-index/工作台/添加管理' component={AddAdmin}></Route>
                            <Route path='/admin-index/工作台/管理' component={AdminTer}></Route>
                        </Suspense>
                </Content>
                </Layout>
                </Layout>
            </Layout>
            </section>
        );
    }
}

export default index;
