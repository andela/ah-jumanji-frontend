import React from 'react';
import PropTypes from 'prop-types';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'react-share';

const template = 'Article from Authors Haven';

const Icons = (props) => {
  const { shareUrl, title } = props;
  return (
    <span className="row" id="social-share-span">
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="share-icon">
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      &nbsp;
      &nbsp;
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="share-icon">
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      &nbsp;
      &nbsp;
      <EmailShareButton
        subject={template}
        body={title + ' ' + shareUrl}
        className="share-icon">
        <EmailIcon size={40} round />
      </EmailShareButton>
      &nbsp;
      &nbsp;
      <LinkedinShareButton
        url={shareUrl}
        title={title}
        className="share-icon">
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </span>
  );
};

Icons.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Icons;