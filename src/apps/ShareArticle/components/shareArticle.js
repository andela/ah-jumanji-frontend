import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icons from './container';

class SocialIcons extends Component {

  render () {
    const { title } = this.props;
    // change here later to heroku link
    const shareUrl = process.env.BASE_URL_FRONTEND + location.pathname;
    return (
      <Icons shareUrl={shareUrl} title={title} />
    );
  }
}

SocialIcons.propTypes = {
  title: PropTypes.string.isRequired
};


export default SocialIcons;
