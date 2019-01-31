import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as dashboardActions from '../actions/dashboardActions';


class ArticleLikesButton extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions, slug } = this.props;
    actions.fetchArticleLikes(slug);
  }

  render() {
    const {articleLikes} = this.props;
    return (
      <button type="button" className="btn btn-info btn-sm">
        <i className="far fa-thumbs-up" />
      </button>
    );
  }
}

ArticleLikesButton.propTypes = {
  actions: PropTypes.object.isRequired,
  articleLikes: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};


function mapStateToProps(state) {
  return {
    articleLikes: state.Dashboard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dashboardActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticleLikesButton);
