import React, { Component } from "react";
import { Form, Input, Button, InputNumber } from "antd";
import "./addShop.scss";
import Header from "../../../components/Header/header";
import { Staff } from "../../../axios";
import Category from "../../../components/Category/category";
const { getType, getList } = Staff;
const { TextArea } = Input;
//添加商品
export default class addShop extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="staff-addShop">
          {/* 头部 */}
          <Header title="添加商品"></Header>
          <section className="addShop-main">
            <Form
              onFinish={this.handleRefs}
              ref={(changeInfo) => (this.changeInfo = changeInfo)}
              size="large"
              labelCol={{ span: 2 }}
              wrapperCol={{ span: 12 }}
            >
              <Form.Item
                label="商品名"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "姓名不能为空",
                  },
                ]}
              >
                <Input placeholder="请输入商品名"></Input>
              </Form.Item>
              <Form.Item
                label="数量"
                name="num"
                rules={[
                  {
                    required: true,
                    message: "数量不能为空",
                  },
                  {
                    type: "number",
                    max: 10000,
                    min: 0,
                    message: "数量在指定范围之内",
                  },
                ]}
              >
                <InputNumber
                  type="number"
                  min={16}
                  max={150}
                  placeholder="请输入数量"
                ></InputNumber>
              </Form.Item>
              <Form.Item
                label="类别"
                name="category"
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
                  type="number"
                  placeholder="请输入单价"
                ></InputNumber>
              </Form.Item>
              <Form.Item label="备注" name="mark">
                <TextArea rows={8} maxLength={80}></TextArea>
              </Form.Item>
              <Form.Item style={{ textAlign: "center" }}>
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                  className="ref-btn"
                >
                  提交
                </Button>
              </Form.Item>
            </Form>
          </section>
        </section>
      </>
    );
  }
}
