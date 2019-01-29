import React from 'react';
import PropTypes from 'prop-types';

const InfoSubscript = (props) => {
  const { text, extraClasses } = props;
  return (
    <p className={`${extraClasses} text-info`}>
      {text}
    </p>
  );
};

InfoSubscript.propTypes = {
  text: PropTypes.string.isRequired,
  extraClasses: PropTypes.string.isRequired,
};

export default InfoSubscript;