import React, { PureComponent } from 'react'
import PropTypes from "prop-types";
import {Descriptions} from "antd";
import {Admin} from "../../axios";
const {getOrderById}=Admin;
export class AdminDescript extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            info:{
                orderTotal:0,
                orderMax:0,
                orderSum:0,
                orderAvg:0
            }
        }
    }
    handlegetData=async userId=>{
        const data=await getOrderById(userId);
        console.log(data);
        if(data.data[0]){
            this.setState({
                info:data.data[0]
            })
        }
    }
    componentDidMount(){
        this.handlegetData(this.props.record.userId);
    }
    render() {
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
                                <Descriptions.Item label="销售单数">{this.state.info.orderTotal}</Descriptions.Item>
                                <Descriptions.Item label="最高销量">{this.state.info.orderMax}</Descriptions.Item>
                                <Descriptions.Item label="月平均销量">{Math.floor(this.state.info.orderAvg)}</Descriptions.Item>
                                <Descriptions.Item label="总销售额">{this.state.info.orderSum}</Descriptions.Item>

                            </>
                        )
                    }
                
            </Descriptions>   
            </>
        )
    }
}
AdminDescript.propTypes={
    record:PropTypes.object.isRequired
}
export default AdminDescript
