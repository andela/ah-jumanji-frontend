/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { read_cookie } from 'sfcookies';

import ReactorInfo from './ReactorInfoComponent';

// Get current logged in User
const loggedInuser = read_cookie('loggedInUsername');



class ReactorsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { reactionType, reactions} = this.props;
    let likers = [];
    let dislikers = [];
    reactions.map(rxn => (rxn.reaction === 1 ? likers.push(rxn.user.username) : dislikers.push(rxn.user.username)));

    reactions = {
      like: likers.map(liker => liker === loggedInuser ? "You" : liker),
      dislike: dislikers.map(disliker => disliker === loggedInuser ? "You" : dislikers),
    };

    const reactors = reactions[`${reactionType || "dislike"}`];

    const pluralise = () => (
      reactors.length > 1 ? "s" : ""
    );

    const pluraliseVerb = () => (
      reactors.length > 1 ? "" : "s"
    );

    return (
      <div className="reactions-container hidden">
        <p className="reactors-header">{`${reactors.length ? reactors.length : "No"} user${pluralise()} ${reactionType}${pluraliseVerb()} this comment`}</p>
        <div className="reactors-names">
          {
            reactors.map(reactor => (
              // eslint-disable-next-line react/jsx-key
              <ReactorInfo key={reactors.indexOf(reactor)} reactor={reactor} />))
          }
        </div>
      </div>
    );
  }
}

ReactorsContainer.propTypes = {
  reactionType: PropTypes.string.isRequired,
  reactions: PropTypes.array.isRequired,
};


export default ReactorsContainer;
