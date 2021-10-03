import React from "react";
import { Descriptions, Button, Space } from "antd";
import "./userInfo.scss";
import Store from "../../../redux/store";
import message from "../../../api/message";
import axios from "axios";
import { userSave } from "../../../redux/action/user";
export default function UserInfo(props) {
  const user = Store.getState()["user"];
  function handleModicImg() {
    document.querySelector(".file").click();
  }
  function handleUpload() {
    const File = document.querySelector(".file").files[0];
    const FileType = File.type.split("/")[1];
    if (FileType === "jpeg" || FileType === "png" || FileType === "jpg") {
      if (File.size > 1024 * 1024 * 5) {
        message("图片大小不能超过5M");
      } else {
        const formData = new FormData();
        formData.append("head", File);
        axios({
          url: "/staff/modicImg",
          method: "POST",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress(e) {},
        }).then((res) => {
          user.imgPath = res.data.data;
          console.log(user);
          Store.dispatch(userSave(user));
          message("修改成功", "success");
        });
      }
    } else {
      message("请检查文件类型");
    }
  }
  return (
    <section className="userInfo-container">
      <section className="userInfo-header">个人信息</section>
      <section className="userInfo-mainer">
        <Descriptions bordered>
          <Descriptions.Item label="姓名">{user.username}</Descriptions.Item>
          <Descriptions.Item label="年龄">{user.age}</Descriptions.Item>
          <Descriptions.Item label="头像">
            {" "}
            <img
              src={user.imgPath}
              alt="用户头像"
              style={{ with: 200, height: 200 }}
            />
          </Descriptions.Item>
          <Descriptions.Item label="性别">{user.sex}</Descriptions.Item>
          <Descriptions.Item label="籍贯">{user.address}</Descriptions.Item>
          <Descriptions.Item label="进入公司时间">
            {user.joinTime}
          </Descriptions.Item>
          <Descriptions.Item label="电话" span={3}>
            {user.phone}
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">{user.email}</Descriptions.Item>
        </Descriptions>
      </section>
      <section className="btn-container">
        <Space>
          <Button
            size="large"
            onClick={() => props.history.push("/index/modicInfo")}
          >
            修改信息
          </Button>
          <Button size="large" type="primary" onClick={handleModicImg}>
            修改头像
          </Button>
        </Space>
      </section>
      <input
        type="file"
        className="file"
        multiple={false}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleUpload}
      ></input>
    </section>
  );
}
