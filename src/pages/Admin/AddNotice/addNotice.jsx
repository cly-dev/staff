import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import Progress from "../../../components/Progress/progress";
import "./addNotice.scss";
import { message } from "../../../api";
import { Admin } from "../../../axios";
import { Notice } from "../../../socket";
import { UploadOutlined } from "@ant-design/icons";
const { addNotice, uploadFile } = Admin;
const { TextArea } = Input;
export default class AddNotice extends Component {
  constructor(props) {
    super(props);
    //上传文件地址
    this.filePath = "";
    this.state = {
      //时间
      timer: "",
      //类型
      type: [],
      //文件名
      fileName: "",
      //上传进度
      progress: 0,
    };
  }

  //提交事件
  handleRef = async () => {
    const loading = message("正在提交中", "loading");
    const { title, content } = this.formRef.getFieldValue();
    const result = await addNotice({ title, content, file: this.filePath });
    if (result.code === "200") {
      loading.destroy();
      message("添加成功", "success");
      Notice(result.data);
      this.props.history.push("/admin-index/通知/查看通知");
    } else {
      message(result.msg);
    }
  };
  //获取上传文件名
  getPath = (path) => {
    this.filePath = path;
  };
  render() {
    return (
      <section className="addNotice-container">
        <section className="addNotice-header">发布通知</section>
        <Form
          onFinish={this.handleRef}
          ref={(from) => (this.formRef = from)}
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 10,
          }}
          layout="horizontal"
          initialValues={{}}
          size="large"
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: "请输入标题",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="描述" name="content">
            <TextArea
              rows={8}
              showCount
              maxLength={100}
              className="textArea-input"
            ></TextArea>
          </Form.Item>
          <Form.Item label="上传相关文件" name="file">
            <Form.Item>
              {/* 进度条 */}
              <Progress
                clear={() => (this.data = "")}
                url="/admin/uploadFile"
                path={this.getPath}
              ></Progress>
            </Form.Item>
          </Form.Item>
        </Form>
        <section className="refs-container">
          <Button
            size="large"
            type="primary"
            className="refs-btn"
            onClick={() => this.formRef.submit()}
          >
            提交
          </Button>
        </section>
      </section>
    );
  }
}
