import React, { Component } from "react";
import PropTypes from "prop-types";
import "./task.scss";
import { Button, Space, Popconfirm, Modal, InputNumber } from "antd";
import { message } from "../../api";
export default class task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiable: false,
    };
    console.log(props);
  }
  static propTypes = {
    data: PropTypes.any.isRequired,
  };
  //点击申请延期事件
  handleOk = () => {
    this.props.postpone(this.props.data.key, this.num.value);
    this.setState({
      visiable: false,
    });
    message("申请成功,请等待审核", "success");
  };
  render() {
    return (
      //显示任务正文组件
      <section className="backlog-task">
        {/* 正文 */}
        <article>
          内容:{this.props.data.content ? this.props.data.content : "暂无内容"}
        </article>
        {/* 相关文件链接 */}
        {this.props.data.url && (
          <>
            相关文件地址:
            <a href={this.props.data.url} download={this.props.title}>
              {this.props.data.url}
            </a>
          </>
        )}
        {/* 回馈 */}
        <section className="task-feedback">
          <Space>
            <Popconfirm
              title="确认完成任务"
              cancelText="稍等"
              okText="完成"
              onConfirm={() => this.props.Finsh(this.props.data.key)}
            >
              <Button type="primary">已完成</Button>
            </Popconfirm>
            <Button
              disabled={this.props.data.status ? true : false}
              onClick={() => this.setState({ visiable: true })}
            >
              {this.props.data.status === 0 && "申请延期"}
              {this.props.data.status === 1 && "正在审核中"}
              {this.props.data.status === 2 &&
                `延期${this.props.data.postTime}`}
            </Button>
          </Space>
        </section>
        {/* 申请延期弹出框 */}
        <Modal
          width="12.5rem"
          visible={this.state.visiable}
          title="请输入延迟天数"
          okText="确定"
          cancelText="取消"
          onCancel={() => this.setState({ visiable: false })}
          onOk={() => this.handleOk()}
        >
          <InputNumber
            style={{ width: "100%" }}
            ref={(num) => (this.num = num)}
          ></InputNumber>
        </Modal>
      </section>
    );
  }
}
