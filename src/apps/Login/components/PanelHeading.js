import React from 'react';
import PropTypes from 'prop-types';


const PanelHeading = (props) => {

  const {title } = props;

  return (
    <div className="panel-heading">
      <h3>
        {title}
      </h3>
      <hr />
    </div>
  );
};

export const PanelHeadingPropTypes = {
  title: PropTypes.string.isRequired
};

PanelHeading.propTypes = PanelHeadingPropTypes;

export default PanelHeading;
