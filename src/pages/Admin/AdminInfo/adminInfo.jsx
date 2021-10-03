import React, { Component } from "react";
import { Descriptions, Avatar, Button, Space } from "antd";
import Store from "../../../redux/store";
import "./adminInfo.scss";
import Mask from "../../../components/Mask/mask";
import { Admin } from "../../../axios";
import { message } from "../../../api";
import { adminSave } from "../../../redux/action/admin";
const { uploadFile } = Admin;
export default class AdminInfo extends Component {
  constructor() {
    super();
    this.state = {
      //控制遮罩层
      visiable: false,
    };
    this.info = Store.getState()["admin"];
    console.log(this.info);
  }
  //点击上传事件
  handleClick = () => {
    document.querySelector(".uplaod-img").click();
  };
  //上传事件
  handleUpload = async () => {
    const File = document.querySelector(".uplaod-img").files[0];
    const FileType = File.type.split("/")[1];
    if (FileType === "jpeg" || FileType === "png" || FileType === "jpg") {
      if (File.size > 1024 * 1024 * 5) {
        message("图片大小不能超过5M");
      } else {
        const formData = new FormData();
        formData.append("head", File);
        const data = await uploadFile(
          "/admin/changeAvatar",
          formData,
          (e) => {},
          { "Content-Type": "multipart/form-data" }
        );
        if (data.code === "200") {
          message("修改成功", "success");
          this.info.imgPath = data.data;
          Store.dispatch(adminSave(this.info));
        }
      }
    } else {
      message("请检查文件类型");
    }
  };
  render() {
    return (
      <>
        <Descriptions bordered>
          <Descriptions.Item label="姓名" style={{ textAlign: "center" }}>
            {this.info.name}
          </Descriptions.Item>
          <Descriptions.Item label="职位" style={{ textAlign: "center" }}>
            {this.info.position}
          </Descriptions.Item>
          <Descriptions.Item label="头像" style={{ textAlign: "center" }}>
            <Avatar
              src={" http://localhost:3030" + this.info.imgPath}
              shape="square"
              size="large"
              className="info-avatar"
              onClick={() => this.setState({ visiable: true })}
            ></Avatar>
          </Descriptions.Item>
          <Descriptions.Item label="入职时间" style={{ textAlign: "center" }}>
            {this.info.joinTime}
          </Descriptions.Item>
          <Descriptions.Item
            label="联系方式"
            span={2}
            style={{ textAlign: "center" }}
          >
            {this.info.phone}
          </Descriptions.Item>
          <Descriptions.Item label="邮箱" style={{ textAlign: "center" }}>
            {this.info.email}
          </Descriptions.Item>
        </Descriptions>
        <Mask
          visiable={this.state.visiable}
          cancel={() => this.setState({ visiable: false })}
        >
          <Avatar
            src={" http://localhost:3030" + this.info.imgPath}
            shape="square"
            size="large"
            style={{ width: "30vw", height: "50vh" }}
            onClick={() => this.setState({ visiable: false })}
          ></Avatar>
        </Mask>
        {/* 底部操作栏 */}
        <section className="adminInfo-change">
          <Space>
            <Button
              onClick={() =>
                this.props.history.push("/admin-index/工作台/修改信息")
              }
            >
              修改信息
            </Button>
            <Button type="primary" onClick={this.handleClick}>
              修改头像
            </Button>
          </Space>
          <input
            style={{ display: "none" }}
            type="file"
            className="uplaod-img"
            onChange={this.handleUpload}
          />
        </section>
      </>
    );
  }
}
