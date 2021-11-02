//查看商品组件
import React, { Component } from "react";
import "./shop.scss";
import Header from "../../../components/Header/header.jsx";
import Category from "../../../components/Category/category";
import { Table, Button, Space, Modal, Form, Input, InputNumber } from "antd";
import { Staff } from "../../../axios";
import { message } from "../../../api";
const { watchShop, changeShop } = Staff;
const { TextArea } = Input;
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "商品名",
        dataIndex: "Sname",
        key: "Sname",
      },
      {
        title: "类别",
        dataIndex: "type",
        key: "type",
      },
      {
        title: "单价",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "库存",
        key: "num",
        dataIndex: "num",
        sorter: {
          compare: (a, b) => a.num - b.num,
        },
      },
      {
        title: "备注",
        key: "mask",
        dataIndex: "mask",
      },
      {
        title: "操作",
        key: "action",
        render: (record, text, index) => {
          return (
            <Space>
              <Button onClick={() => this.handleModic(record, index)}>
                修改
              </Button>
            </Space>
          );
        },
      },
    ];
    this.columns.forEach((val) => {
      val.align = "center";
    });

    this.state = {
      //商品数据列表
      listData: [
        {
          name: "手机",
          category: ["日用品", "家电"],
          price: 200,
          num: 200,
          key: 1,
          mark: "好东西",
        },
      ],
      //控制弹出框可视
      visible: false,
      //控制按钮loading状态
      loading: false,
      //操作行数据
      data: {},
      //操作行索引
      index: 0,
      //条数
      total: 0,
    };
  }
  //点击修改事件
  handleModic = (record, index) => {
    this.setState({
      index,
      data: record,
      visible: true,
    });
  };
  //点击删除事件
  // handleDelete = (record) => {};
  //按照页面获取数据
  handleGetList = (pageNum) => {};
  //确认修改事件
  handleRef = () => {
    this.formRef.submit();
  };
  //获取商品数据
  handleGetList = async (num) => {
    const { code, data, pageSize } = await watchShop(num);
    console.log(data);
    if (code === "200") {
      data.forEach((item) => {
        item.key = item._id;
      });
      this.setState({
        listData: data,
        total: pageSize,
      });
    }
  };
  //提交
  handleChange = async (val) => {
    const { code } = await changeShop(this.state.data._id, val);
    if (code === "200") {
      message("修改成功", "success");
      const { listData } = this.state;
      const obj = listData.find((item) => item._id === this.state.data._id);
      for (let key in val) {
        obj[key] = val[key];
      }
      this.setState({
        listData,
        visible: false,
      });
    }
  };
  //生命周期
  componentDidMount() {
    this.handleGetList(1);
  }
  render() {
    return (
      <>
        {/* 查看商品 */}
        <section className="staff-shop">
          {/* 头部标题 */}
          <Header title="查看商品"></Header>
          {/* 主体 */}
          <section className="shop-main">
            {/* 表单 */}
            <Table
              pagination={{
                defaultPageSize: 8,
                hideOnSinglePage: true,
                responsive: true,
                total: this.state.total,
                onChange: (pageNum) => {
                  this.handleGetList(pageNum);
                },
              }}
              columns={this.columns}
              bordered
              dataSource={this.state.listData}
            ></Table>
          </section>
          {/* 修改弹出框 */}
          <Modal
            title={this.state.data.name}
            visible={this.state.visible}
            okText="确认"
            cancelText="取消"
            onOk={this.handleRef}
            onCancel={() => this.setState({ visible: false })}
            confirmLoading={this.state.loading}
          >
            {/* 表单 */}
            <Form
              style={{ width: "90%" }}
              initialValues={this.state.data}
              onFinish={this.handleChange}
              ref={(formRef) => (this.formRef = formRef)}
            >
              <Form.Item
                label="名字"
                name="Sname"
                rules={[
                  {
                    required: true,
                    message: "商品名不能为空",
                  },
                ]}
              >
                <Input placeholder="请输入商品名"></Input>
              </Form.Item>
              <Form.Item
                label="类别"
                name="typ"
                rules={[
                  {
                    required: true,
                    message: "类别不能为空",
                  },
                ]}
              >
                <Category></Category>
              </Form.Item>
              <Form.Item
                label="单价"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "单价不能为空",
                  },
                ]}
              >
                <InputNumber
                  type="price"
                  min={1}
                  placeholder="请输入单价"
                ></InputNumber>
              </Form.Item>
              <Form.Item
                label="库存"
                name="num"
                rules={[
                  {
                    required: true,
                    message: "单价不能为空",
                  },
                ]}
              >
                <InputNumber
                  type="num"
                  min={1}
                  placeholder="请输入数量"
                ></InputNumber>
              </Form.Item>
              <Form.Item label="备注" name="mask">
                <TextArea rows={8} maxLength={150}></TextArea>
              </Form.Item>
            </Form>
          </Modal>
        </section>
      </>
    );
  }
}
