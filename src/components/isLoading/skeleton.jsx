import React from "react";
import { Skeleton } from "antd";
import PropTypes from "prop-types";
import "./skeleton.scss";
export default function skeleton(props) {
  return (
    <>
      {props.isLoading
        ? [1, 2, 3, 4, 5].map((item, index) => {
            return (
              <section className="skeleton" key={index}>
                <Skeleton avatar={props.isAvatar} active={props.isActive} />
              </section>
            );
          })
        : ""}
    </>
  );
}
skeleton.propTypes = {
  isAvatar: PropTypes.bool,
  isActiver: PropTypes.bool,
  isLoading: PropTypes.any,
};
