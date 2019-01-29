/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const { id, iconType, onClick, onMouseEnter, onMouseLeave } = props;
  return (
    <React.Fragment>
      <i
        id={id}
        className={`${iconType} icons`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onMouseEnter}
      />
    </React.Fragment>
  );
};

Icon.defaultProps = {
  onMouseEnter: null,
  onMouseLeave: null,
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Icon;