import React from 'react';
import Icon from '../../Comments/Components/Reusable/Icon';

 const ReactionIcons = () => {
  //  Click Handler
  const onClick = (e) => {
    alert(e.target.id);
  };

  return (
    <div className="reaction-icons">
      <Icon
        id="like-icon"
        iconType="far fa-thumbs-up"
        onClick={onClick}
      />
      <Icon
        id="dislike-icon"
        iconType="far fa-thumbs-down"
        onClick={onClick}
      />
    </div>
  );
};

export default ReactionIcons;