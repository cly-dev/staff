import React, { Component,lazy,Suspense} from 'react';
import {Row,Col,Menu,Dropdown,Tabs,Badge} from "antd";
import { Route } from 'react-router'; 
import { DownOutlined,UserOutlined,ExportOutlined, AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import "./index.scss";
import {NavLink} from 'react-router-dom';
const NewNotice=lazy(()=>import("../NewNotice/NewNotice.jsx"));
const OldNotice=lazy(()=>import("../OldNotice/OldNotice.jsx"));
const { SubMenu } = Menu;
const { TabPane } = Tabs;
export default class index extends Component {
    constructor(props){
        super(props);
        this.menu=[
                    {
                        nav:'个人信息',
                        icon:<UserOutlined style={{fontSize:'1.25rem'}}></UserOutlined>,
                        link:''
                    },{
                        nav:'注销',
                        icon:<ExportOutlined style={{fontSize:'1.25rem'}}></ExportOutlined> ,
                        link:''
                    },
                ]
        this.asideMenu=[
                        {
                            id:'sub1',
                            icon:<Badge dot style={{width:15,height:15}} offset={[-6,7]} ><MailOutlined style={{fontSize:'1.3rem',color:'#409EFF',padding:4}}/></Badge>,
                            title:'通知',
                            item:[
                                {
                                    key:1,
                                    nav:'今日通知',
                                    link:'/index/newNotice',
                                },
                                {
                                    key:2,
                                    nav:'以往通知',
                                    link:'/index/oldNotice',
                                }
                            ]
                        },{
                            id:'sub2',
                            icon:<AppstoreOutlined style={{fontSize:'1.6rem',color:'#67C23A'}} />,
                            title:'业绩',
                            item:[
                                {
                                    key:3,
                                    nav:'添加流水',
                                    link:'/index/addOrder',

                                },
                                {
                                    key:4,
                                    nav:'查询销量',
                                    link:'/index/watchOrder',
                                },{
                                    key:5,
                                    nav:'生成报表',
                                    link:'/index/state',
                                }
                            ]
                        },{
                            id:'sub3',
                            icon:<SettingOutlined style={{fontSize:'1.5rem',color:'#F56C6C'}} />,
                            title:'个人设置',
                            item:[
                                {
                                    key:6,
                                    nav:'修改密码',
                                    link:'/index/modicPsd'
                                },
                                {
                                    key:7,
                                    nav:'修改信息',
                                    link:'/index/modicInfo'
                                },{
                                    key:8,
                                    nav:'申请调休',
                                    link:'/index/Apply'
                                }
                            ]
                        }
                        ]
        }
        state = {
            activeKey:0,
            panes: [],
        };
        //点击菜单事件
        handleClick = data => {
            console.log('click ', data);
            const { panes } = this.state;
            let title=data.nav;
            let obj=panes.find((item=>item.title===title));
            if(obj){
                this.onChange(obj.key);
            }else{
                const activeKey =`${panes.length  + 1}`;
                const newPanes = [...panes];
                newPanes.push({ title,key: activeKey,link:data.link });
                this.setState({
                panes: newPanes,
                activeKey,
                });
            }

        };
        //点击tab事件      
        onChange = activeKey => {
            const {panes} =this.state;
            this.props.history.push(panes[activeKey - 1].link);
            this.setState({activeKey});
        };
        //移除tab事件
        remove = targetKey => {
            const { panes, activeKey } = this.state;
            let newActiveKey = activeKey;
            let lastIndex;
            panes.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i - 1;
                }
            });
            const newPanes = panes.filter(pane => pane.key !== targetKey);
            if (newPanes.length && newActiveKey === targetKey) {
                if (lastIndex >= 0) {
                    newActiveKey = newPanes[lastIndex].key;
                } else {
                    newActiveKey = newPanes[0].key;
                }
            }
            this.setState({
                panes: newPanes,
                activeKey: newActiveKey,
            });
        };
        //刷新存储事件
        handleStorage=()=>{
            sessionStorage.setItem("router",JSON.stringify(this.state.panes));
        }
        //生命周期
        componentDidMount(){
            const route=JSON.parse(sessionStorage.getItem("router"));
            this.setState({panes:route?route:[]}); 
            window.addEventListener("beforeunload",this.handleStorage,false);
            if(route){
                const obj=route.find(item=>item.link===this.props.location.pathname);
                if(obj){
                    this.setState({
                        activeKey:obj.key
                    })
                }
            }
           
        }
        componentWillUnmount(){
            window.removeEventListener("beforeunload",this.handleStorage,false);
        }
        render() {
            const { panes, activeKey } = this.state;
            return (
                <>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={24}>
                            {/* 头部 */}
                            <header>
                                <span className="nav-tips">员工管理系统</span>
                                {/* 用户信息 */}
                                <section className="user-info">
                                    <img src="/public/logo192.png" alt="" className="user-avater"/>
                                        <Dropdown placement="bottomCenter" overlay={(
                                            <Menu>
                                                {
                                                    this.menu.map((item,index)=>{
                                                        return (
                                                            <Menu.Item key={index} icon={item.icon} className="menu-item">
                                                                <NavLink  to={item.link}>{item.nav}</NavLink>
                                                            </Menu.Item>
                                                        )
                                                    })
                                                }
                                            </Menu>
                                        )}>
                                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                阿勇 <DownOutlined style={{fontSize:'0.6rem'}} />
                                            </span>
                                    </Dropdown>
                                </section>
                            </header>
                            {/* 主体 */}
                            <section className="index-mainer">
                                <aside>
                                <Menu
                                    style={{ width: '100%',fontSize:'1.2rem'}}
                                    mode="inline"
                                    >
                                {
                                    this.asideMenu.map((item,index)=>{
                                        return(
                                            <SubMenu key={item.id} icon={item.icon} title={item.title} className="sub-Menu">
                                            {
                                                item.item.map((value,index)=>{
                                                    return (                                
                                                        <Menu.Item key={value.key} className="sub-item">
                                                            <NavLink to={value.link}  onClick={()=>this.handleClick(value)}>
                                                                {value.nav}
                                                            </NavLink>
                                                        </Menu.Item>
                                                        )   
                                                })
                                            }
                                    </SubMenu>
                                        )
                                    })
                                }
                                </Menu>
                                </aside>
                                <section className="index-container">
                                <Tabs
                                        
                                        hideAdd
                                        className="heander-Tab"
                                        type="editable-card"
                                        onChange={this.onChange}
                                        activeKey={activeKey}
                                        onEdit={this.onEdit}
                                    >
                                        {panes.map(pane => (
                                        <TabPane  tab={pane.title} key={pane.key} closable={pane.closable}>
                                        </TabPane>
                                        ))}
                                    </Tabs>
                                    <section className="route-container">
                                        <Suspense fallback={<h1>加载失败</h1>}>
                                            <Route path="/index/newNotice" component={NewNotice}></Route>
                                            <Route path='/index/oldNotice' component={OldNotice}></Route>
                                            <Route path='/index/addOrder'></Route>
                                            <Route path="/index/watchOrder"></Route>
                                            <Route path='/index/state'></Route>
                                            <Route path='/index/modicPsd'></Route>
                                            <Route path='/index/modicInfo'></Route>
                                            <Route path='/index/Apply'></Route>
                                        </Suspense>
                                    </section>
                                </section>
                            </section>
                        </Col>
                    </Row>
                </>
        )
    }
}