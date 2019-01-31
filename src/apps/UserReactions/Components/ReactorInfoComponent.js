import React from 'react';
import PropTypes from 'prop-types';

import { read_cookie } from 'sfcookies';

import config from '../../../config/config';

const loggedInuser = read_cookie('loggedInUsername');
const { viewProfile } = config.api;



const ReactorInfo = (props) => {
  const { reactor } = props;
  return (
    <React.Fragment>
      <a className="reactor-name" href={`${viewProfile}/${reactor === "You" ? loggedInuser : reactor}`} className="reactor-info">{reactor}</a>
    </React.Fragment>
  );
};

ReactorInfo.propTypes = {
  reactor: PropTypes.string.isRequired,
};

export default ReactorInfo;
