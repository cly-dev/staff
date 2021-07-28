import React, { Component,lazy,Suspense} from 'react';
import {Row,Col,Menu,Dropdown,Tabs,Badge} from "antd";
import { Route } from 'react-router'; 
import { DownOutlined,UserOutlined,ExportOutlined, AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import "./index.scss";
import {NavLink} from 'react-router-dom';
const NewNotice=lazy(()=>import("../NewNotice/NewNotice.jsx"));
const OldNotice=lazy(()=>import("../OldNotice/OldNotice.jsx"));
const AddOrder=lazy(()=>import("../AddOrder/addOrder.jsx"));
const Watch=lazy(()=>import("../Watch/watch.jsx"));
const State=lazy(()=>import("../State/state.jsx"));
const Changepassword=lazy(()=>import("../ChangePassword/changepassword.jsx"));
const ChangeOrder=lazy(()=>import("../ChangeOrder/ChangeOrder.jsx"));
const ModicInfo=lazy(()=>import("../ChangeInfo/changeInfo.jsx"));
const UserInfo=lazy(()=>import("../UserInfo/userInfo.jsx"))
const { SubMenu } = Menu;
const { TabPane } = Tabs;
export default class index extends Component {
    constructor(props){
        super(props);
        this.menu=[
                    {
                        nav:'个人信息',
                        icon:<UserOutlined style={{fontSize:'1.25rem'}}></UserOutlined>,
                        link:'/index/userInfo'
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
            const { panes } = this.state;
            let title=data.nav;
            let obj=panes.find((item=>item.title===title));
            if(obj){
                this.setState({activeKey:obj.key});;
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
        onEdit = (targetKey, action) => {
            this[action](targetKey);
          };
        //点击tab事件      
        onChange = activeKey => {
            console.log(activeKey);
            const {panes} =this.state;
            console.log(panes);
            this.props.history.push(panes[activeKey - 1].link);
            this.setState({activeKey});
        };
        //移除tab事件
        remove = targetKey => {
            console.log(targetKey);
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
            const maxPanes=newPanes.filter(item=>targetKey<item.key);
            console.log(maxPanes);
            const minpanes=newPanes.filter(item=>targetKey>item.key);
            maxPanes.forEach(val=>{
                val.key-=1;
            })
            this.setState({
                panes:[...minpanes,...maxPanes],
                activeKey: newActiveKey,
            });
        };
        handleToUser=link=>{
            let data={
                nav:'个人信息',
                link
            }
            this.handleClick(data);
            this.props.history.push(link);
        }
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
                                                            <Menu.Item key={index} icon={item.icon} className="menu-item"   onClick={()=>this.handleToUser(item.link)}>
                                                                <span >{item.nav}</span>
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
                                    <section className="route-mainer">
                                        <section className="route-container">
                                            <Suspense fallback={<h1>加载失败</h1>}>
                                                <Route path="/index/newNotice" component={NewNotice}></Route>
                                                <Route path='/index/oldNotice' component={OldNotice}></Route>
                                                <Route path='/index/addOrder' component={AddOrder}></Route>
                                                <Route path="/index/watchOrder" component={Watch}></Route>
                                                <Route path='/index/state' component={State}></Route>
                                                <Route path='/index/modicPsd' component={Changepassword}></Route>
                                                <Route path="/index/changeOrder/:orderId" component={ChangeOrder}></Route>
                                                <Route path='/index/modicInfo' component={ModicInfo}></Route>
                                                <Route path='/index/userInfo' component={UserInfo}></Route>
                                                <Route path='/index/Apply'></Route>
                                            </Suspense>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </Col>
                    </Row>
                </>
        )
    }
}