import React from 'react';
import PropTypes from 'prop-types';

import ValidationSubscript from './validationSubscript';

export const EditFormInput = (props) => {

  const {label, inputType, inputName, value, onChange} = props;

  return (
    <div className="form-group">
      {label}
      <input
        type={inputType} onChange={onChange} className="form-control" name={inputName}
        value={value} required
      />
      <ValidationSubscript />
    </div>
  );
};

export const formInputPropTypes = {
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

EditFormInput.propTypes = formInputPropTypes;
