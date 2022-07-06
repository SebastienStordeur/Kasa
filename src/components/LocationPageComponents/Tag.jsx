import React from "react";
import PropTypes from "prop-types";

const Tag = ({value}) => {
  return (
    <div className="tag">{value}</div>
  )
}

Tag.propTypes = {
  value: PropTypes.string,
}

export default Tag