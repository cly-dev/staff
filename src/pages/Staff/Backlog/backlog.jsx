import React, { Component } from "react";
import { Avatar } from "antd";
import "./backlog.scss";
import Task from "../../../components/Task/task";
import Header from "../../../components/Header/header";
export default class Backlog extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        //任务列表
        {
          title: "快点完成12222222221122222222222222222222111",
          time: "2021-9-27",
          content: "加油",
          key: "2",
          name: "阿勇",
          state: "经理",
          status: 0,
          postTime: 0,
        },
        {
          title: "快点完成12222222221122222222222222222222111",
          time: "2021-9-27",
          content: "加油22",
          key: "1",
          name: "阿勇",
          state: "经理",
          url: "www.baidu.com",
          status: 1,
          postTime: 2,
        },
      ],
      //当前任务列表
      index: 0,
    };
  }
  //点击完成事件
  handleFinsh = (key) => {
    let { list, index } = this.state;
    this.setState({
      list: list.filter((item) => item.key !== key),
      index: index - 1 > 0 ? (index -= 1) : 0,
    });
  };
  //延期
  handlePostpone = (key, num) => {
    const { list } = this.state;
    const obj = list.find((item) => item.key === key);
    obj.status = 1;
    obj.postTime = num;
    this.setState({ list });
  };
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
              <section className="backLog-aside">
                {this.state.list.map((item, index) => {
                  return (
                    <section
                      className="aside-item"
                      key={item.key}
                      onClick={() => this.setState({ index })}
                    >
                      {/* 头像 */}
                      <Avatar className="item-avatar"></Avatar>
                      {/* 任务信息 */}
                      <section className="item-info">
                        <section className="info-name">
                          <span>
                            {item.name}-{item.state}
                          </span>
                          <i> {item.time}</i>
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
