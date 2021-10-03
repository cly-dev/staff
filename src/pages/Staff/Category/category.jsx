import React, { Component } from "react";
import "./category.scss";
import Header from "../../../components/Header/header";
import { Card, Space, Tooltip, Input, Button, Checkbox } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import message from "../../../api/message";
export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      //列表数据
      listData: [
        {
          title: "日用品",
          data: ["1", "2"],
          key: "1",
        },
        {
          title: "日用品2",
          data: ["1", "2"],
          key: "2",
        },
        {
          title: "日用品3",
          data: ["1", "2"],
          key: "2",
        },
        {
          title: "日用品4",
          data: ["1", "2"],
          key: "2",
        },
        {
          title: "日用品5",
          data: ["1", "2"],
          key: "2",
        },
        {
          title: "日用品6",
          data: ["1", "2"],
          key: "2",
        },
        {
          title: "日用品7",
          data: ["1", "2"],
          key: "2",
        },
        {
          title: "日用品8",
          data: ["1", "2"],
          key: "2",
        },
      ],
      //未保存标识
      isInput: false,
    };
    //保存原始数据
    this.data = [];
    //保存选择的数据
    this.checkedData = [];
    //删除条目的下标
    this.index = 0;
  }
  //添加子类
  handleCreate = (val, index) => {
    if (!this.state.isInput) {
      const { listData } = this.state;
      listData[index].data.push(
        <Space>
          <Input ref={(input) => (this.input = input)}></Input>{" "}
          <Button
            size="middle"
            type="primary"
            onClick={() => this.handleRef(val, index)}
          >
            保存
          </Button>
          <Button
            size="middle"
            onClick={() => this.handleRefCancel(val, index)}
          >
            取消
          </Button>
        </Space>
      );
      this.setState({
        listData,
        isInput: true,
      });
    } else {
      message("请先保存");
    }
  };
  //取消添加子类
  handleRefCancel = (val, index) => {
    const { listData } = this.state;
    val.data.pop();
    listData[index] = val;
    this.setState({
      listData,
      isInput: false,
    });
  };
  //选择子项事件
  handleChange = (e, val, index) => {
    this.index = index;
    if (e.target.checked) {
      this.checkedData.push(e.target.value);
    } else {
      this.checkedData = this.checkedData.filter(
        (item) => item !== e.target.value
      );
    }
  };
  //删除子类
  handleDelete = (val, index) => {
    console.log(val);
    if (!this.state.isInput) {
      this.data = [...val.data];
      const { listData } = this.state;
      for (let i = 0; i < val.data.length; i++) {
        val.data[i] = (
          <Space>
            <Checkbox
              valuePropName="checked"
              value={val.data[i]}
              onChange={(e) => this.handleChange(e, this.data[i], index)}
            ></Checkbox>
            {val.data[i]}
          </Space>
        );
      }
      val.data.push(
        <section style={{ position: "relative" }}>
          <Space style={{ position: "absolute", right: 0 }}>
            <Button size="small" type="danger" onClick={this.handleComfirmDet}>
              删除
            </Button>
            <Button size="small" onClick={() => this.handleDetCancel(index)}>
              取消
            </Button>
          </Space>
        </section>
      );
      listData[index] = val;
      this.setState({
        listData,
        isInput: true,
      });
    } else {
      message("请先保存");
    }
  };
  //取消删除
  handleDetCancel = (index) => {
    const { listData } = this.state;
    listData[index].data = this.data;
    this.setState({
      listData,
      isInput: false,
    });
  };
  //确认删除
  handleComfirmDet = () => {
    const { listData } = this.state;
    if (this.checkedData.length) {
      this.data = this.data.filter((item) => {
        return !this.checkedData.includes(item);
      });
      listData[this.index].data = this.data;
      this.setState({
        listData,
        isInput: false,
      });
    } else {
      message("请选择删除的类别");
    }
  };
  //确定添加
  handleRef = (val, index) => {
    if (this.input.state.value) {
      const { listData } = this.state;
      if (listData[index].data.includes(this.input.state.value)) {
        message("该类别已存在");
        return;
      }
      val.data.pop();
      val.data.push(this.input.state.value);
      listData[index] = val;
      this.setState({
        listData,
        isInput: false,
      });
      return;
    }
    message("内容不能为空");
  };
  render() {
    return (
      <>
        {/* 管理类别 */}
        <section className="staff-category">
          {/* 头部 */}
          <Header title="管理类别"></Header>
          <section className="catrgory-main">
            {this.state.listData.map((val, index) => {
              return (
                <Card
                  className="main-card"
                  title={val.title}
                  key={val.title}
                  extra={
                    <Space>
                      <Tooltip title="添加子类">
                        <PlusOutlined
                          onClick={() => this.handleCreate(val, index)}
                        />
                      </Tooltip>
                      <Tooltip title="删除子类">
                        <DeleteOutlined
                          onClick={() => this.handleDelete(val, index)}
                        />
                      </Tooltip>
                    </Space>
                  }
                  style={{ width: 300 }}
                >
                  {val.data.map((item, key) => {
                    return (
                      <section
                        onDoubleClick={() => this.handleDelete(val, key)}
                        className="card-item"
                        key={key}
                      >
                        {item}
                      </section>
                    );
                  })}
                </Card>
              );
            })}
          </section>
        </section>
      </>
    );
  }
}
