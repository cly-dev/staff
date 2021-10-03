import React, { Component } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./mask.scss";
export default class Mask extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        {this.props.visiable && (
          <section className="mask-content">
            <section className="content-info">{this.props.children}</section>
            <section className="mask-cancel">
              <CloseCircleOutlined
                onClick={this.props.cancel}
                className="cancel-btn"
              />
            </section>
          </section>
        )}
      </>
    );
  }
}
