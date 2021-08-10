import React, { Component } from 'react';
import "./search.scss";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import List from "../../../components/List/list";
const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      status:1,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      status:1,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      status:-1,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      status:-2,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];
class Search extends Component {
    //搜索事件
    onSearch=val=>{
        console.log(val);
    }
    //页码改变事件
    handlePageNum=val=>{
        console.log(val);
      }
    render() {
        return (
            <section className="search-container">
                    <section className="search-header">
                        <section className="search">
                            <Input.Search placeholder="请输入用户姓名" size="large" onSearch={this.onSearch} enterButton />
                        </section>
                    </section>
                    <section className="search-mainer">
                        <List data={data} page={this.handlePageNum} total={4} pageSize={2}></List>
                    </section>
            </section>
        );
    }
}

export default Search;
