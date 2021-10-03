import React from "react";
import PropTypes from "prop-types";
import "./header.scss";
function header(props) {
  return (
    <section className="staff-header">
      {props.title}

      {props.children}
    </section>
  );
}

header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default header;
