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
        <TwitterIcon size={35} round />
      </TwitterShareButton>
      &nbsp;
      &nbsp;
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="share-icon">
        <FacebookIcon size={35} round />
      </FacebookShareButton>
      &nbsp;
      &nbsp;
      <EmailShareButton
        subject={template}
        body={title + ' ' + shareUrl}
        className="share-icon">
        <EmailIcon size={35} round />
      </EmailShareButton>
      &nbsp;
      &nbsp;
      <LinkedinShareButton
        url={shareUrl}
        title={title}
        className="share-icon">
        <LinkedinIcon size={35} round />
      </LinkedinShareButton>
    </span>
  );
};

Icons.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Icons;