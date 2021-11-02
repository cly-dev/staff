import React, { Component, lazy, Suspense } from "react";
import { Row, Col, Menu, Dropdown, Tabs, Badge, notification } from "antd";
import { Route } from "react-router";
import Store from "../../../redux/store";
import { userClear } from "../../../redux/action/user";
import {
  DownOutlined,
  UserOutlined,
  ExportOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Staff } from "../../../axios";
import { NavLink } from "react-router-dom";
import { Login, handleMsg, LoginOut } from "../../../socket";
import { message } from "../../../api";
import Footer from "../../Public/Footer/footer";
import eventBus from "../../../api/eventBus";
const NewNotice = lazy(() => import("../NewNotice/NewNotice.jsx"));
const OldNotice = lazy(() => import("../OldNotice/OldNotice.jsx"));
const AddOrder = lazy(() => import("../AddOrder/addOrder.jsx"));
const Watch = lazy(() => import("../Watch/watch.jsx"));
const State = lazy(() => import("../State/state.jsx"));
const shop = lazy(() => import("../Shop/shop.jsx"));
const addShop = lazy(() => import("../AddShop/addShop.jsx"));
const Changepassword = lazy(() =>
  import("../ChangePassword/changepassword.jsx")
);
const Category = lazy(() => import("../Category/category.jsx"));
const ChangeOrder = lazy(() => import("../ChangeOrder/ChangeOrder.jsx"));
const ModicInfo = lazy(() => import("../ChangeInfo/changeInfo.jsx"));
const UserInfo = lazy(() => import("../UserInfo/userInfo.jsx"));
const Apply = lazy(() => import("../Apply/apply.jsx"));
const ApplyList = lazy(() => import("../ApplyList/applyList.jsx"));
const BackLog = lazy(() => import("../Backlog/backlog.jsx"));
const { SubMenu } = Menu;
const { TabPane } = Tabs;
const { handleDelete, loginOut } = Staff;
const openNotificationWithIcon = (desc, duration = null) => {
  notification.warn({
    message: "温馨提示",
    description: desc,
    duration,
    top: 200,
  });
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.client = "";
    this.userInfo = Store.getState()["user"];
    this.menu = [
      {
        nav: "个人信息",
        icon: <UserOutlined style={{ fontSize: "1.25rem" }}></UserOutlined>,
        link: "/index/userInfo",
      },
      {
        nav: "注销",
        icon: <ExportOutlined style={{ fontSize: "1.25rem" }}></ExportOutlined>,
        link: "",
      },
    ];
    this.asideMenu = [
      {
        id: "sub1",
        icon: (
          <Badge
            dot={this.state.isHot}
            style={{ width: 15, height: 15 }}
            offset={[-6, 7]}
          >
            <MailOutlined
              style={{ fontSize: "1.3rem", color: "#409EFF", padding: 4 }}
            />
          </Badge>
        ),
        title: "通知",
        item: [
          {
            key: 1,
            nav: "今日通知",
            link: "/index/notice",
          },
          {
            key: 2,
            nav: "以往通知",
            link: "/index/oldNotice",
          },
          {
            key: 3,
            nav: "我的申请",
            link: "/index/applyList",
          },
          {
            key: 14,
            nav: "我的待办",
            link: "/index/backlog",
          },
        ],
      },
      {
        id: "sub2",
        icon: (
          <AppstoreOutlined style={{ fontSize: "1.6rem", color: "#67C23A" }} />
        ),
        title: "业绩",
        item: [
          {
            key: 4,
            nav: "添加流水",
            link: "/index/addOrder",
          },
          {
            key: 5,
            nav: "查询销量",
            link: "/index/watchOrder",
          },
          {
            key: 6,
            nav: "生成报表",
            link: "/index/state",
          },
        ],
      },
      {
        id: "sub3",
        icon: (
          <SettingOutlined style={{ fontSize: "1.5rem", color: "#F56C6C" }} />
        ),
        title: "个人设置",
        item: [
          {
            key: 7,
            nav: "修改密码",
            link: "/index/modicPsd",
          },
          {
            key: 8,
            nav: "修改信息",
            link: "/index/modicInfo",
          },
          {
            key: 9,
            nav: "申请调休",
            link: "/index/Apply",
          },
        ],
      },
      {
        id: "sub4",
        icon: (
          <ShoppingOutlined style={{ fontSize: "1.5rem", color: "#E6A23C" }} />
        ),
        title: "商品管理",
        item: [
          {
            key: 10,
            nav: "查看商品",
            link: "/index/shop",
          },
          {
            key: 11,
            nav: "添加商品",
            link: "/index/addShop",
          },
          {
            key: 12,
            nav: "管理类别",
            link: "/index/category",
          },
        ],
      },
    ];
  }
  state = {
    //高亮
    activeKey: 0,
    //导航
    panes: [],
    //信息提示栏是否高亮
    isHot: false,
  };
  //点击菜单事件
  handleClick = (data) => {
    const { panes } = this.state;
    let title = data.nav;
    let obj = panes.find((item) => item.title === title);
    if (obj) {
      this.setState({ activeKey: obj.key.toString() });
    } else {
      const activeKey = panes.length + 1 + "";
      const newPanes = [...panes];
      newPanes.push({ title, key: activeKey, link: data.link });
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
  onChange = (activeKey) => {
    const { panes } = this.state;
    this.props.history.push(panes[activeKey - 1].link);
    this.setState({ activeKey });
  };
  //移除tab事件
  remove = (targetKey) => {
    console.log(targetKey);
    if (targetKey - 2 >= 0) {
      let { panes, activeKey } = this.state;
      let newActiveKey = activeKey;
      let lastIndex;
      panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      //判断key
      const newPanes = panes.filter((pane) => pane.key !== targetKey);
      if (newPanes.length && newActiveKey === targetKey) {
        if (lastIndex >= 0) {
          newActiveKey = newPanes[lastIndex].key;
        } else {
          newActiveKey = newPanes[0].key;
        }
      }
      //根据点击的key进行过滤
      const maxPanes = newPanes.filter((item) => targetKey < item.key);
      const minpanes = newPanes.filter((item) => targetKey > item.key);
      maxPanes.forEach((val) => {
        val.key -= 1;
      });
      panes = [...minpanes, ...maxPanes];
      this.props.history.push(panes[targetKey - 2].link);
      this.setState({
        panes,
        activeKey: panes[targetKey - 2].key,
      });
    } else {
      this.setState({
        activeKey: "1",
      });
    }
  };
  //点击跳转事件
  handleToUser = async (link) => {
    if (link) {
      let data = {
        nav: "个人信息",
        link,
      };
      this.handleClick(data);
    } else {
      const { msg } = await loginOut();
      if (msg === "200") {
        //退出登录
        Store.dispatch(userClear());
        //删除当前主机唯一标识
        localStorage.clear();
        sessionStorage.clear();
        LoginOut(this.userInfo.userId);
      }
    }
    this.props.history.push(link);
  };
  //刷新存储事件
  handleStorage = () => {
    sessionStorage.setItem("router", JSON.stringify(this.state.panes));
  };
  //生命周期
  componentDidMount() {
    //监听自定义事件
    let { panes, isHot } = this.state;
    eventBus.on("hot", (val) => {
      isHot = val;
    });

    if (this.userInfo && JSON.stringify(this.userInfo) !== "{}") {
      const route = JSON.parse(sessionStorage.getItem("router"));
      panes = route ? route : [];
      window.addEventListener("beforeunload", this.handleStorage, false);
      if (route) {
        const obj = route.find(
          (item) => item.link === this.props.location.pathname
        );
        if (obj) {
          this.setState({
            activeKey: obj.key,
          });
        }
      } else {
        panes.push({
          key: "1",
          title: "今日通知",
          link: "/index/notice",
        });
        this.props.history.push("/index/notice");
        this.setState({
          panes,
          activeKey: "1",
        });
      }
      //判断用户状态
      if (this.userInfo.status === -1) {
        openNotificationWithIcon("你已被停职,无法操作", 2);
        setTimeout(() => {
          this.props.history.push("/");
        }, 2000);
      } else if (this.userInfo.status === -2) {
        openNotificationWithIcon("你已被解雇,稍后自动删除账号", 2);
        handleDelete(this.userInfo.userId);
        Store.dispatch(userClear());
        localStorage.clear();
        sessionStorage.clear();
        setTimeout(() => {
          this.props.history.push("/");
        }, 2000);
      } else if (this.userInfo.status === 0) {
        openNotificationWithIcon(`检查到您还未修改初始密码`, null);
        Login(this.userInfo.userId);
      } else if (this.userInfo.status === 1) {
        Login(this.userInfo.userId);
      }
      this.setState({
        isHot,
        panes,
      });
      //登录连接事件
      this.client = handleMsg((data) => {
        if (data) {
          message(data);
        }
      });
    } else {
      message("还未登录,请先登录");
      this.props.history.push("/");
    }
  }
  componentWillUnmount() {
    LoginOut(this.userInfo.userId);
    eventBus.off("hot");
    window.removeEventListener("beforeunload", this.handleStorage, false);
    this.client && this.client.off();
    notification.destroy();
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
                <img
                  src={this.userInfo.imgPath}
                  alt=""
                  className="user-avater"
                />
                <Dropdown
                  placement="bottomCenter"
                  overlay={
                    <Menu>
                      {this.menu.map((item, index) => {
                        return (
                          <Menu.Item
                            key={index}
                            icon={item.icon}
                            className="menu-item"
                            onClick={() => this.handleToUser(item.link)}
                          >
                            <span>{item.nav}</span>
                          </Menu.Item>
                        );
                      })}
                    </Menu>
                  }
                >
                  <span
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {this.userInfo.username}{" "}
                    <DownOutlined style={{ fontSize: "0.6rem" }} />
                  </span>
                </Dropdown>
              </section>
            </header>
            {/* 主体 */}
            <section className="index-mainer">
              <aside>
                <Menu
                  style={{ width: "100%", fontSize: "1.2rem" }}
                  mode="inline"
                >
                  {this.asideMenu.map((item, index) => {
                    return (
                      <SubMenu
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        className="sub-Menu"
                      >
                        {item.item.map((value, index) => {
                          return (
                            <Menu.Item key={value.key} className="sub-item">
                              <NavLink
                                to={value.link}
                                onClick={() => this.handleClick(value)}
                              >
                                {value.nav}
                              </NavLink>
                            </Menu.Item>
                          );
                        })}
                      </SubMenu>
                    );
                  })}
                </Menu>
              </aside>
              <section className="index-container">
                <section
                  style={{ borderBottom: "1px solid rgb(238, 234, 234)" }}
                >
                  <Tabs
                    hideAdd
                    className="heander-Tab"
                    type="editable-card"
                    onChange={this.onChange}
                    activeKey={activeKey}
                    onEdit={this.onEdit}
                  >
                    {panes.map((pane) => (
                      <TabPane
                        tab={pane.title}
                        key={pane.key}
                        closable={pane.closable}
                      ></TabPane>
                    ))}
                  </Tabs>
                </section>
                <section className="route-mainer">
                  {/* 路由展示区 */}
                  <section className="route-container">
                    <Suspense fallback={<h1>加载失败</h1>}>
                      <Route path="/index/notice" component={NewNotice}></Route>
                      <Route
                        path="/index/oldNotice"
                        component={OldNotice}
                      ></Route>
                      <Route
                        path="/index/addOrder"
                        component={AddOrder}
                      ></Route>
                      <Route path="/index/watchOrder" component={Watch}></Route>
                      <Route path="/index/state" component={State}></Route>
                      <Route
                        path="/index/modicPsd"
                        component={Changepassword}
                      ></Route>
                      <Route
                        path="/index/changeOrder/:orderId"
                        component={ChangeOrder}
                      ></Route>
                      <Route
                        path="/index/modicInfo"
                        component={ModicInfo}
                      ></Route>
                      <Route
                        path="/index/userInfo"
                        component={UserInfo}
                      ></Route>
                      <Route path="/index/Apply" component={Apply}></Route>
                      <Route
                        path="/index/applyList"
                        component={ApplyList}
                      ></Route>
                      <Route path="/index/addShop" component={addShop}></Route>
                      <Route path="/index/shop" component={shop}></Route>
                      <Route
                        path="/index/category"
                        component={Category}
                      ></Route>
                      <Route path="/index/backlog" component={BackLog}></Route>
                    </Suspense>
                  </section>
                </section>
              </section>
            </section>
          </Col>
        </Row>

        <Footer type="primary"></Footer>
      </>
    );
  }
}
