import React, { Component,lazy, Suspense} from 'react';
import {Route,Link} from "react-router-dom"
import { Layout, Menu, Breadcrumb,Avatar,Dropdown} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,DownOutlined,LogoutOutlined} from '@ant-design/icons';
import "./index.scss";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const AddStaff=lazy(()=>import("../AddStaff/addStaff.jsx"));
const StaffList=lazy(()=>import("../StaffList/staffList.jsx"));
const Performance=lazy(()=>import("../Performance/performance.jsx"));
const Search=lazy(()=>import("../Search/search.jsx"));
const AddNotice=lazy(()=>import("../AddNotice/addNotice.jsx"));
const NoticeList=lazy(()=>import("../NoticeList/noticeList.jsx"));
const ApplyList=lazy(()=>import("../ApplyList/applyList.jsx"));
class index extends Component {
    constructor(props){
        super(props);
        this.menu=<Menu onClick={this.onClick}>
                    <Menu.Item key="1" icon={<UserOutlined />}>个人信息</Menu.Item>
                    <Menu.Item key="2" icon={<LogoutOutlined />}>退出登录</Menu.Item>
                </Menu>
        this.state={
            route:[],
        }
    }
    onClick = ({ key }) => {
        // message.info(`Click on item ${key}`);
        console.log(key);
    };
    handleClick=(e)=>{
        this.setState({
            route:e.keyPath.reverse()
        })
    }
    componentDidMount(){
        const path= this.props.location.pathname.replace('/admin-index','');
        this.setState({
            route:path.slice(1,path.length).split('/')
        })
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
                            <Avatar size={44} icon={<UserOutlined />} />
                            <Dropdown overlay={this.menu}>
                                <span className="info-name">我是阿勇<DownOutlined style={{paddingLeft:5}} /></span>
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
                            <Menu.Item key="修改信息">修改信息</Menu.Item>
                            <Menu.Item key="修改密码">修改密码</Menu.Item>
                            <Menu.Item key="添加管理">添加管理</Menu.Item>
                            <Menu.Item key="注销">注销</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 20px 20px' }}>
                        <Breadcrumb className="crumb-nav" >
                            <Breadcrumb.Item><Link to='/admin-index'>首页</Link></Breadcrumb.Item>
                            {
                                this.state.route.length?(
                                    <>
                                        <Breadcrumb.Item>{this.state.route[0]}</Breadcrumb.Item>
                                        <Breadcrumb.Item>{this.state.route[1]}</Breadcrumb.Item>
                                    </>
                                ):''
                            }
                            
                        </Breadcrumb>
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
