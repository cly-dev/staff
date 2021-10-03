import React, { useState } from "react";
import {
  CheckSquareOutlined,
  DeleteOutlined,
  LoadingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Admin } from "../../axios";
import { Button } from "antd";
import "./progress.scss";
import { message } from "../../api";
const { uploadFile, deleteFile } = Admin;
export default function Progress(props) {
  //文件路径
  const [path, setPath] = useState("");
  //文件名
  const [pathName, setPathName] = useState("");
  //传输进度
  const [progress, setPrpgress] = useState(0);
  //上传loading
  const [loading, setLoading] = useState(false);
  //上传成功
  const [succeed, setSucceed] = useState(false);
  //上传事件
  async function handleUpload(e) {
    //上传文件
    const formData = new FormData();
    //获取文件
    formData.append("file", e.target.files[0]);
    setLoading(true);
    setPrpgress(0);
    setPathName(e.target.files[0].name);
    const data = await uploadFile(
      props.url,
      formData,
      (e) => {
        setPrpgress((e.loaded / e.total) * 100);
      },
      {
        "Content-Type": "multipart/form-data",
      }
    );
    if (data.code === "200") {
      //向父组件传递
      props.path(data.data);
      setPath(data.data);
      message("上传成功", "success");
      setLoading(false);
      setSucceed(true);
    }
  }
  //点击删除
  async function handleDel() {
    if (path) {
      let data = await deleteFile(path);
      if (data.code === "200") {
        setPath("");
        props.clear();
        setLoading(false);
        setPrpgress(0);
        setSucceed(false);
        setPathName("");
      }
    }
  }
  return (
    <>
      <section className="upload-file">
        {/* 上传文件 */}
        <Button className="btn" icon={<UploadOutlined />}>
          点击上传
        </Button>
        <input
          type="file"
          className="upload-file"
          onChange={handleUpload}
        ></input>
      </section>
      {pathName && (
        <section className="progress-content">
          {loading && (
            <LoadingOutlined className="progress-loading"></LoadingOutlined>
          )}
          {succeed && (
            <CheckSquareOutlined
              className="progress-succeed"
              style={{ color: "#67C23A" }}
            />
          )}
          <span className="path-name">{pathName}</span>
          {/* 进度条 */}
          {progress !== 0 && <progress max="100" value={progress}></progress>}
          {/* 删除 */}
          {succeed && (
            <DeleteOutlined className="progress-delete" onClick={handleDel} />
          )}
        </section>
      )}
    </>
  );
}
