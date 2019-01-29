import React from 'react';
import PropTypes from 'prop-types';

const ValidationSubscript = (props) => {
  const {message, classname} = props;
  return (
    <p className={classname}>{message}</p>
  );
};

ValidationSubscript.propTypes = {
  message: PropTypes.string,
  classname: PropTypes.string,
};

ValidationSubscript.defaultProps = {
  message: "",
  classname: "subscript subscript-warning hidden",
};

export default ValidationSubscript;
