import React from 'react';
import PropTypes from 'prop-types';

import ValidationSubscript from './validationSubscript';

export const FormInput = (props) => {

  const {label, inputType, inputName, placeholder, onChange} = props;

  return (
    <div className="form-group">
      {label}
      <input
        type={inputType} onChange={onChange} className="form-control" name={inputName}
        placeholder={placeholder} required
      />
      <ValidationSubscript />
    </div>
  );
};

export const formInputPropTypes = {
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

FormInput.propTypes = formInputPropTypes;

