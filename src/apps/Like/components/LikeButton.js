import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as likingActions from "../actions/likeActions";

const articleSlug = `${location.pathname.split("/")[3]}`;

class LikeButton extends Component{
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount = () => {
    const { actions } = this.props;
    actions.getArticleLikes(articleSlug);
  };

  handleLike = () => {
    const data = {
      "slug": articleSlug,
      "reaction": 1
    };
    const { actions } = this.props;
    actions.addLikes(data);
  };

  render() {
    const { liked } = this.props;
    return(
      <React.Fragment>
        <a
          id="like-btn"
          className="article-more">
          <i className={`fas fa-thumbs-up reaction ${liked ? 'active' : ''}`} onClick={this.handleLike} />
        </a>
        &nbsp;
      </React.Fragment>
    );
  }
}

LikeButton.propTypes = {
  actions: PropTypes.object.isRequired,
  likeCount: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
};

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(likingActions, dispatch)
};
}

const mapStateToProps = ({ LikeReducer }) => LikeReducer;

export default connect(mapStateToProps, matchDispatchToProps)(LikeButton);
