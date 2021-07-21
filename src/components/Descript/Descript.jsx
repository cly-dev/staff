import React, { PureComponent } from 'react'
import {Descriptions} from "antd";
export class Descript extends PureComponent {
    render() {
        console.log(this.props);
        return (
            <>
                <Descriptions
                    className="descript-container"
                    al
                    title=""
                    size="small"
                >
                <Descriptions.Item label="姓名">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="工号">Prepaid</Descriptions.Item>
                <Descriptions.Item label="年龄">18:00:00</Descriptions.Item>
                <Descriptions.Item label="最高销量月份">$80.00</Descriptions.Item>
                <Descriptions.Item label="月平均销量">$20.00</Descriptions.Item>
            </Descriptions>   
            </>
        )
    }
}

export default Descript
