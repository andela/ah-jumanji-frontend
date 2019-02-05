import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

import * as articlePageActions from '../../actions/fetch/_get_actions';

import ArticleView from './_articleview';
import Ratings from '../../../Rating/components/Rating';
import CommentsContainer from '../../../Comments/Components/CommentsContainer';
import LikeButton from "../../../Like/components/LikeButton";
import BookmarkButton from '../../../Bookmarks/components/BookmarkButton';
// import { fetchBookmark } from '../../../Dashboard/actions/dashboardActions'
import SocialIcons from '../../../ShareArticle/components/shareArticle';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.getSlug = this.getSlug.bind(this);
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

    let title = this.getSlug();
    let arr = title.split('-');
    let arr2 = arr.slice(0, arr.length - 2);
    let fisrtChar = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    arr2[0] = fisrtChar;
    let passTitle = arr2.join(' ');

    return (
      <div className="container auth-container">
        <div className="row">
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
            <span className="float-right">
              <BookmarkButton slug={slug} bookmarked={bookmarked} />
            </span>
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
