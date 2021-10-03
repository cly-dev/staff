import React, { useRef, useState, useEffect } from "react";
import { Cascader } from "antd";
import { Staff } from "../../axios";
const { getType, getList } = Staff;
export default function Category(props) {
  //设置类型
  const [type, setType] = useState([]);
  //设置代理
  const typeRef = useRef();
  typeRef.current = type;
  useEffect(() => {
    //获取类型
    if (!localStorage.getItem("type")) {
      getType().then((res) => {
        res.data.forEach(async (value) => {
          let result = await getList(value._id);
          let children = [];
          result.data.list.forEach((value) => {
            children.push({
              value,
              label: value,
            });
          });
          type.push({
            value: value.type,
            label: value.type,
            id: value._id,
            children,
          });
          setType(type);
          localStorage.setItem("type", JSON.stringify(type));
        });
        typeRef.current = type;
      });
    } else {
      setType(JSON.parse(localStorage.getItem("type")));
    }
  }, [typeRef]);
  return (
    <Cascader {...props} options={type} placeholder="请输入类别"></Cascader>
  );
}
