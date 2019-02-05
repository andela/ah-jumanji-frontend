import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {read_cookie} from 'sfcookies';

import * as articlePageActions from '../../actions/fetch/_get_actions';

import ArticleView from './_articleview';
import Ratings from '../../../Rating/components/Rating';
import CommentsContainer from '../../../Comments/Components/CommentsContainer';
import LikeButton from "../../../Like/components/LikeButton";
import SocialIcons from '../../../ShareArticle/components/shareArticle';
import { openWindow } from '../../actions/common/common';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.getSlug = this.getSlug.bind(this);
    const token = read_cookie('token');
    if(token.length === 0){
      openWindow(`/`);
    }
  }

  getSlug() {
    //Get slug from ulr
    const myProps = this.props;
    return myProps.match.params.slug;
  }

  render() {
    let slug = this.getSlug();
    let bookmarked = false;
    let {Articles} = this.props;
    if (Articles) {
      bookmarked = Articles.bookmarked;
    }

    let passTitle = slug;
    if(Articles !== undefined ){
      passTitle = Articles.title;
    }


    return (
      <div className="container auth-container">
        <div className="article-view col-md-10">
          <div className="col-md-12">
            <ArticleView slug={slug} />
          </div>
        </div>

        <div className="row article-bottom">
          <div className="col-md-12">
            <LikeButton />
            &nbsp;&nbsp;
            <Ratings />
            <SocialIcons title={passTitle} />
          </div>
          <div className="col-md-12">
            <CommentsContainer />
          </div>
        </div>
      </div>
    );
  }
}

//export default ArticlePage;
ArticlePage.propTypes = {
  Articles: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    Articles: state.Articles.read_article,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articlePageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
