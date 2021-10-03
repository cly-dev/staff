import React, { Component } from "react";
import { List, Avatar, Button, Space } from "antd";
import "./NewNotice.scss";
import { Staff } from "../../../axios";
import { message } from "../../../api";
import { receptionNotice } from "../../../socket";
import eventBus from "../../../api/eventBus";
const { getNoticeByDate, readNotice } = Staff;
export default class NewNotice extends Component {
  state = {
    //数据列表
    listData: [],
    //条数
    total: 0,
  };
  //获取信息
  handleGetNotice = async (pageNum) => {
    const { listData } = this.state;
    listData.length = 0;
    const date = new Date();
    let time = `${date.getFullYear()}年-${
      date.getMonth() + 1
    }月-${date.getDate()}日`;
    const result = await getNoticeByDate(pageNum, time);
    if (result.data) {
      result.data.forEach((value) => {
        listData.push({ ...value, ...value.admin, ...value.notice });
      });
      listData.length && eventBus.emit("hot", true);
      this.setState({
        listData,
        total: result.pageSize,
      });
    }
  };
  //点击读取
  handleRead = async (val, index) => {
    const { listData } = this.state;
    const result = await readNotice(val._id);
    if (result.code === "200") {
      listData[index].status = "1";
      message("读取成功", "success");
      this.setState({
        listData,
      });
    } else {
      message(result.msg);
    }
  };
  //生命周期
  componentDidMount() {
    this.handleGetNotice(1);
    receptionNotice((data) => {
      if (data) {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  }
  render() {
    return (
      <>
        {}
        {/* <Skeleton active> */}
        <List
          locale={{ emptyText: this.state.total === 0 ? "暂无信息" : "" }}
          header={
            <h2 style={{ textIndent: 20 }}>今日有{this.state.total}条消息</h2>
          }
          itemLayout="horizontal"
          size="large"
          pagination={{
            onChange: (page) => {
              this.handleGetNotice(page);
            },
            total: this.state.total,
            pageSize: 5,
          }}
          dataSource={this.state.listData}
          renderItem={(item, index) => (
            <List.Item key={item._id} className="list-item">
              <List.Item.Meta
                avatar={<Avatar src={item.imgPath} />}
                title={item.title}
                description={
                  <Space>
                    {item.name}
                    {item.position}
                    <span style={{ color: "black" }}>{item.createTime}</span>
                  </Space>
                }
              />
              {item.content}
              {/* 文件下载 */}
              {item.file && (
                <section className="notice-file">
                  相关文件地址:
                  <a href={"/api" + item.file} download>
                    {item.title}
                  </a>
                </section>
              )}
              {/* 读取按钮 */}
              <section className="btn-container">
                <Space style={{ float: "right" }}>
                  <Button
                    type="primary"
                    disabled={item.status > 0}
                    onClick={() => this.handleRead(item, index)}
                  >
                    {item.status === 0 ? "未" : "已"}读
                  </Button>
                </Space>
              </section>
            </List.Item>
          )}
        />
        ,{/* </Skeleton> */}
      </>
    );
  }
}
