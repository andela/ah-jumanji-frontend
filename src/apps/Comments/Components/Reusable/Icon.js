/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const { id, iconType, onClick, onMouseEnter, onMouseLeave, specialStyle } = props;
  return (
    <React.Fragment>
      <i
        id={id}
        className={`${iconType} icons ${specialStyle}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onMouseEnter}
        specialStyle={specialStyle}
      />
    </React.Fragment>
  );
};

Icon.defaultProps = {
  onMouseEnter: null,
  onMouseLeave: null,
  specialStyle: null,
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  specialStyle: PropTypes.string,
};

export default Icon;