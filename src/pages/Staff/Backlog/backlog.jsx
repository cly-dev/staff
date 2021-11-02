import React, { Component } from "react";
import { Avatar } from "antd";
import "./backlog.scss";
import Task from "../../../components/Task/task";
import Header from "../../../components/Header/header";
import { Staff } from "../../../axios";
import message from "../../../api/message";
import { postTurn, finshTask } from "../../../socket";
import Store from "../../../redux/store";
const { getTaskById, FinshTask } = Staff;
//TODO --还未完成
export default class Backlog extends Component {
  constructor() {
    super();
    //当前页面
    this.pageNum = 1;
    //是否加载成功标识
    this.loadSuccess = false;
    //节流
    this.timer = null;
    //总页数
    this.total = 0;
    this.state = {
      list: [],
      //当前任务列表
      index: 0,
    };
  }
  //点击完成事件
  handleFinsh = async (key, adminId) => {
    let { list, index } = this.state;
    const result = await FinshTask(key);
    if (result.code == "200") {
      finshTask({ username: Store.getState["user"].username, adminId });
      message("棒(๑•̀ㅂ•́)و✧", "success");
      this.setState({
        list: list.filter((item) => item._id !== key),
        index: index - 1 > 0 ? (index -= 1) : 0,
      });
    }
  };
  //延期
  handlePostpone = async (key, num) => {
    const { list } = this.state;
    const obj = list.find((item) => item._id === key);
    obj.status = "2";
    obj.postTime = num;
    this.setState({ list });
  };
  //获取任务
  async handleGetTask(pgaeNum) {
    this.loadSuccess = false;
    const data = await getTaskById(pgaeNum);
    if (data.code === "200") {
      this.loadSuccess = true;
      data.data.forEach((val) => {
        for (let key in val.admin) {
          val[key] = val.admin[key];
        }
      });
      return data;
    }
  }
  //滑动
  handleScroll = async (e) => {
    if (this.timer != null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      const el = e.target;
      console.log(this);
      if (this.loadSuccess) {
        if (el.scrollHeight - (el.offsetHeight + el.scrollTop) < 10) {
          this.pageNum += 1;
          if (this.pgaeNum <= this.total) {
            const { list } = this.state;
            const { data } = this.handleGetTask(this.pageNum);
            list.push(data);
            this.setState({ list });
          } else {
            message("没有更多任务啦");
          }
        }
      }
    }, 500);
  };
  async componentDidMount() {
    const data = await this.handleGetTask(1);
    this.total =
      data.pageSize <= 8
        ? data.pageSize / 8 + (data.pageSize % 8) > 0
          ? 1
          : 0
        : 1;
    this.setState({
      list: data.data,
    });
    //获取申请回执
    this.client = postTurn((data) => {
      if (data) {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  }
  componentWillUnmount() {
    //解绑
    this.client && this.client.off();
  }
  render() {
    return (
      // 待办
      <section className="staff-backlog">
        {/* 头部 */}
        <Header title="我的待办"></Header>

        {/* 待办主体 */}
        <section className="backLog-main">
          {this.state.list.length ? (
            <>
              <section className="backLog-aside" onScroll={this.handleScroll}>
                {this.state.list.map((item, index) => {
                  return (
                    <section
                      className="aside-item"
                      key={index}
                      onClick={() => this.setState({ index })}
                    >
                      {/* 头像 */}
                      <Avatar
                        className="item-avatar"
                        src={item.imgPath}
                      ></Avatar>
                      {/* 任务信息 */}
                      <section className="item-info">
                        <section className="info-name">
                          <span>
                            {item.name}-{item.position}
                          </span>
                          <i> {item.tartTime}</i>
                        </section>
                        {/* 内容 */}
                        <section className="info-content">{item.title}</section>
                      </section>
                    </section>
                  );
                })}
              </section>
              {/*主体*/}
              <section className="backLog-content">
                <Task
                  postpone={this.handlePostpone}
                  Finsh={this.handleFinsh}
                  data={
                    this.state.list.length
                      ? this.state.list[this.state.index]
                      : "暂无任务"
                  }
                ></Task>
              </section>
            </>
          ) : (
            <section className="backlog-null">
              <span>暂无任务</span>
            </section>
          )}
        </section>
      </section>
    );
  }
}
