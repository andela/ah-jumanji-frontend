import React from 'react';
import Icon from '../../Comments/Components/Reusable/Icon';

 const ReactionIcons = () => {

  //  Click Handler
  const onClick = (e) => {
    //
  };

  //  Mouse Enter Handler
  const onMouseEnter = (e) => {

    let reactionsCont = e.target.parentElement.parentElement.nextElementSibling;
    reactionsCont.classList.remove("hidden");
    // this.setState({reactionType: e.target.id});
  };

  //  Mouse Leave Handler
  const onMouseLeave = (e) => {
    let reactionsCont = e.target.parentElement.parentElement.nextElementSibling;
    reactionsCont.classList.add("hidden");
  };

    return (
      <div className="reaction-icons">
        <Icon
          id="like"
          iconType="far fa-thumbs-up"
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <Icon
          id="dislike"
          iconType="far fa-thumbs-down"
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
    );

}

export default ReactionIcons;