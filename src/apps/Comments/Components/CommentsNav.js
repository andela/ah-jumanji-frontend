import React from 'react';
import PropTypes from 'prop-types';

const CommentsNav = (props) => {
    const { numberOfComments, numberOfLikes } = props;
    return (
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" href="#comments" data-toggle="tab" role="tab" aria-controls="comments">
              {`${numberOfComments || "No"} Comment${numberOfComments > 1 ? "s ": " "}`}
              <i className="far fa-comment-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#likes" data-toggle="tab" role="tab" aria-controls="likes">
              {`${numberOfLikes || "No"} Like${numberOfLikes > 1 ? "s ": " "}`}
              <i className="far fa-thumbs-up" />
            </a>
          </li>
        </ul>
      </div>
    );
};

CommentsNav.propTypes = {
  numberOfComments: PropTypes.number.isRequired,
  numberOfLikes: PropTypes.number.isRequired,
};

export default CommentsNav;
