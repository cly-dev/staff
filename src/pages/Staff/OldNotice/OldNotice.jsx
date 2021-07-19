import React,{useState}from 'react'
import { List, Avatar, Button,Space} from 'antd';
import "../NewNotice/NewNotice.scss";
const list = [];
for (let i = 0; i < 23; i++) {
  list.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    time:'2018年',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      '我我我:200minHeight:200min我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我',
  });
}
export default function OldNotice() {
    const [listData,setListData]=new useState(list);
    return (
        <>
           <List
                    locale={{emptyText:'暂无通知'}}
                    itemLayout="horizontal"
                    size="large"
                    pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 5,
                }}
                dataSource={listData}
                renderItem={item => (
                <List.Item
                    key={item.title}
                 >
                <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={<Space>{item.description}<span style={{fontWeight:'bold',color:'black'}}>{item.time}</span></Space>}
                />
                {item.content}
                <section className="btn-container">
                    <Space style={{float:'right'}}>
                        <Button type="primary">未读</Button>
                    </Space>
                </section>
            </List.Item>
            )}
        />, 
        </>
    )
}
