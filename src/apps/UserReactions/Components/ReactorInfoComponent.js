import React from 'react';
import PropTypes from 'prop-types';

const ReactorInfo = (props) => {
  const { reactor } = props;
  return (
    <React.Fragment>
      <span className="reactor-info">{reactor}</span>
    </React.Fragment>
  );
};

ReactorInfo.propTypes = {
  reactor: PropTypes.string.isRequired,
};

export default ReactorInfo;
