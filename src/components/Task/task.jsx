import React, { Component } from "react";
import PropTypes from "prop-types";
import "./task.scss";
import {
  Button,
  Space,
  Popconfirm,
  Modal,
  InputNumber,
  Form,
  Input,
} from "antd";
import { message } from "../../api";
import { Staff } from "../../axios";
import { applyPost as apply } from "../../socket";
const { applyPost } = Staff;
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
    this.form.submit();
  };
  //校验通过
  handleRef = async (value) => {
    const { code } = await applyPost(this.props.data._id, value);
    if (code === "200") {
      this.setState({
        visiable: false,
      });
      //发送信息
      apply(this.props.data);
      message("申请成功,请等待审核", "success");
      this.props.postpone(this.props.data._id, value.num);
    }
  };
  render() {
    return (
      //显示任务正文组件
      <section className="backlog-task">
        {/* 标题 */}
        <span>标题:{this.props.data.title}</span>
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
              onConfirm={() =>
                this.props.Finsh(this.props.data._id, this.props.data.adminId)
              }
            >
              <Button type="primary">已完成</Button>
            </Popconfirm>
            <Button
              disabled={this.props.data.status != "0" ? true : false}
              onClick={() => this.setState({ visiable: true })}
            >
              {this.props.data.status === "0" && "申请延期"}
              {this.props.data.status === "2" && "正在审核中"}
              {this.props.data.status === "3" &&
                `延期${this.props.data.postTime}`}
              {this.props.data.status === "4" && `未通过`}
            </Button>
          </Space>
        </section>
        {/* 申请延期弹出框 */}
        <Modal
          width="12.5rem"
          visible={this.state.visiable}
          title="请输入延迟天数和理由"
          okText="确定"
          cancelText="取消"
          onCancel={() => this.setState({ visiable: false })}
          onOk={() => this.handleOk()}
        >
          <Form ref={(form) => (this.form = form)} onFinish={this.handleRef}>
            <Form.Item
              label="理由"
              name="mask"
              rules={[
                {
                  required: true,
                  message: "天数不能为空",
                },
              ]}
            >
              <Input style={{ width: "100%" }}></Input>
            </Form.Item>
            <Form.Item
              label="天数"
              rules={[
                {
                  required: true,
                  message: "天数不能为空",
                },
              ]}
              name="num"
            >
              <InputNumber
                style={{ width: "100%" }}
                max="7"
                min="0"
              ></InputNumber>
            </Form.Item>
          </Form>
        </Modal>
      </section>
    );
  }
}
