import React from 'react';
import PropTypes from 'prop-types';


const RequiredInput = (props) => {
  const {type, name, label, value, placeholder, onChange} = props;


  return (
    <div>
      <div className="form-group">
        {label}
        <input
          type={type}
          className="form-control"
          id={name}
          placeholder={placeholder}
          required=""
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

RequiredInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};


export default RequiredInput;
