/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const { id, iconType, onClick } = props;
  return (
    <React.Fragment>
      <i
        id={id}
        className={`${iconType} icons`}
        onClick={onClick}
      />
    </React.Fragment>
  );
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Icon;