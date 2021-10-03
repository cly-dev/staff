import React from "react";
import "./footer.scss";
export default function Footer(props) {
  return (
    <section className={props.type ? "footer" + props.type : "footer"}>
      <ul>
        <li>
          <span>权归所有:&copy;cly</span>
        </li>
        <li>
          <a href="https://beian.miit.gov.cn">备案号:闽ICP备2021012171号</a>
        </li>
      </ul>
    </section>
  );
}
