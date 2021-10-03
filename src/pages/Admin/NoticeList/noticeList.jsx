import React, { useState, useEffect, useRef } from "react";
import { Table, Popconfirm, Button, Space, Modal, Descriptions } from "antd";
import { Admin } from "../../../axios";
import { message } from "../../../api";
const { getAllNotice, deleteNotice, hasReader } = Admin;
export default function noticeList() {
  const columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      onCell: () => {
        return {
          style: {
            maxWidth: 150,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            cursor: "pointer",
          },
        };
      },
    },
    { title: "时间", dataIndex: "createTime", key: "time" },
    {
      title: "内容",
      dataIndex: "content",
      key: "content",
      onCell: () => {
        return {
          style: {
            maxWidth: 150,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            cursor: "pointer",
          },
        };
      },
    },
    {
      title: "操作",
      dataIndex: "",
      key: "x",
      render: (text) => (
        <Space>
          <Button onClick={() => handleDicede(text)}>查看详情</Button>
          <Popconfirm
            okText="删除"
            cancelText="取消"
            title="确认删除此条通知?"
            onConfirm={() => handleDelete(text)}
          >
            <Button type="danger">删除</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  columns.forEach((value) => {
    value.align = "center";
  });
  //初始化数据
  const [listData, setListData] = new useState([]);
  const [total, setTotal] = new useState(0);
  const [isModalVisible, setIsModalVisible] = new useState(false);
  const [content, setContent] = new useState({});
  const [num, setNum] = new useState(0);
  const dataRef = new useRef();
  dataRef.current = listData;
  //删除事件
  async function handleDelete(val) {
    const data = await deleteNotice(val._id);
    if (data.code === "200") {
      setListData(listData.filter((value) => value._id !== val._id));
      message("删除成功", "success");
    }
  }
  //点击查看详情
  async function handleDicede(text) {
    setIsModalVisible(true);
    setContent(text);
    const data = await hasReader(text._id);
    setNum(data.data);
  }

  //生命周期
  new useEffect(() => {
    handleChangePageNum(1);
  }, [dataRef]);
  //获取数据列表
  async function handleChangePageNum(page) {
    const result = await getAllNotice(page);
    console.log(result);
    result.data.forEach((value) => {
      value.key = value._id;
    });
    setTotal(result.pageSize);
    setListData(result.data);
  }
  return (
    <section>
      <Table
        pagination={{
          pageSize: 10,
          total,
          onChange: (page) => {
            handleChangePageNum(page);
          },
        }}
        columns={columns}
        dataSource={listData}
      ></Table>
      <Modal
        width={800}
        title="查看详情"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => setIsModalVisible(false)}
        cancelText="退出"
        okText="确定"
      >
        <Descriptions bordered>
          <Descriptions.Item label="标题" span={3}>
            {content.title}
          </Descriptions.Item>
          <Descriptions.Item label="发布时间" span={3}>
            {content.createTime}
          </Descriptions.Item>
          <Descriptions.Item label="已读人数" span={3}>
            {num}
          </Descriptions.Item>
          <Descriptions.Item label="内容详情" span={3}>
            {content.content}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </section>
  );
}
