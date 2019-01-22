import React from 'react';
import PropTypes from 'prop-types';


export default function Header(props) {
  const {label} = props;

  return (
    <div className="panel-heading" style={{padding: "20px 20px 0px 20px"}}>
      <h3>{label}</h3>
      <hr />
    </div>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
};
