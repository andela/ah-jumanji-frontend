import React from 'react';
import {onButtonPressed} from '../../actions/common/common';
import FollowButton from '../../../following/components/FollowButton';

export const Button = (link, call, type, value, article_body, slug, le_props) =>{
        return(
          <li className="publish-nav-item">
            <a
              href={link} onClick={()=>{
              onButtonPressed(call, article_body, slug, le_props);
              }} className={type}>
              { value }
            </a>
          </li>
          );
    };

export const FollowComponent = (author) => {
  return (

    <div className="profile-div">
      <ul className="list-group list-group-flush">
        <li className="article-pre-details">
          <img src={author.profile_photo} alt="jumanji" className="followers-avatar rounded-circle" />
          <a href={`/a/profile/${author.user}`}>{"  " + author.user}</a>
          <br />
        </li>
      </ul>
      <div className="follow-div">
        <FollowButton username={author.user} />
      </div>
    </div>
  );
};
