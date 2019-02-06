import React from 'react';
import PropTypes from 'prop-types';

export default function NavTab(props) {
  const {label, id, content, isActive} = props;
  return (
    <div className={"tab-pane fade show " + isActive} id={id} role="tabpanel" aria-labelledby={label}>
      <div className="col-md-12">{content}</div>
    </div>
  );
}

NavTab.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  isActive: PropTypes.string
};

NavTab.defaultProps = {
  isActive: ""
};
