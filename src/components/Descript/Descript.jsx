import React, { PureComponent } from 'react'
import PropTypes from "prop-types";
import {Descriptions} from "antd";
import Store from "../../redux/store";
export class Descript extends PureComponent {
    constructor(props){
        super(props);
        this.user=props.user?props.user:Store.getState()['user'];
    }
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
                    {
                        this.props.children?this.props.children:(
                            <>
                                <Descriptions.Item label="姓名">{this.user.username}</Descriptions.Item>
                                <Descriptions.Item label="工号">{this.user.userId}</Descriptions.Item>
                                <Descriptions.Item label="年龄">{this.user.age}</Descriptions.Item>
                                <Descriptions.Item label="最高销量">{this.props.record.orderMax}</Descriptions.Item>
                                <Descriptions.Item label="月平均销量">{this.props.record.orderAvg}</Descriptions.Item>
                            </>
                        )
                    }
                
            </Descriptions>   
            </>
        )
    }
}
Descript.propTypes={
    record:PropTypes.object.isRequired
}
export default Descript
