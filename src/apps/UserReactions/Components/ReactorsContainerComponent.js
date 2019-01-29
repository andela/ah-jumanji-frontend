import React from 'react';
import PropTypes from 'prop-types';

import ReactorInfo from './ReactorInfoComponent';

const ReactorsContainer = (props) => {

  const { reactionType } =  props;

  const reactions = {
    like: ["Dennis", "Mithamo", "Khalegi", "Flani", "Mzee"],
    dislike: ["Paul", "James", "Ann", "Salma", "Fabish", "Granson"]
  };

  const reactors = reactions[`${reactionType}`];

  const pluralise = () => (
    reactors.length > 1 ? "s" : ""
  );

  const pluraliseVerb = () => (
    reactors.length > 1 ? "" : "s"
  );

  return (
    <div className="reactions-container">
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
};

ReactorsContainer.propTypes = {
  reactionType: PropTypes.string.isRequired,
};

export default ReactorsContainer;