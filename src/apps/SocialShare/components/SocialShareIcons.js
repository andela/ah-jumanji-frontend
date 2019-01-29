import React from 'react';


class SocialIcons extends React.Component {


  render() {
    return (
      <div>
        <span id="share-text">Share Article</span>
        <div className="dropdown-item more btn-link" data-toggle="modal" data-target="#social-icons">
          <i className="fab fa-twitter twitter-icon share-icons" />
          &nbsp;
          &nbsp;
          <i className="fab fa-facebook-square facebook-icon share-icons" />
          &nbsp;
          &nbsp;
          <i className="fas fa-envelope email-icon share-icons " />
        </div>
      </div>
    );
  }
}

export default SocialIcons;
