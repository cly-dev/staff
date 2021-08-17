import React from 'react';
import {Descriptions} from "antd";
import Store from "../../../redux/store";
export default function adminInfo() {
    const info=Store.getState()['admin'];
    return (
        <Descriptions  bordered>
        <Descriptions.Item label="姓名" style={{textAlign:'center'}}>{info.name}</Descriptions.Item>
        <Descriptions.Item label="职位" style={{textAlign:'center'}}>{info.position}</Descriptions.Item>
        <Descriptions.Item label="入职时间" style={{textAlign:'center'}}>{info.joinTime}20</Descriptions.Item>
        <Descriptions.Item label="联系方式" span={3} style={{textAlign:'center'}}>{info.phone}</Descriptions.Item>
        <Descriptions.Item label="邮箱" span={2} style={{textAlign:'center'}}>
          {info.email}
        </Descriptions.Item>
        
      </Descriptions>
    )
}
