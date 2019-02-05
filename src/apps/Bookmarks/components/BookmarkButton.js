import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

import * as bookmarksActions from '../actions/bookmarksActions';

class BookmarkButton extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const bookmarkData = {
      "bookmark": true,
      "slug": e.target.id
    };

    const { actions } = this.props;
    actions.postBookmark(bookmarkData);
  }

  render() {
    const { slug, bookmarked, bookmark } = this.props;
     let classIcon;
     let labelBookmark;
     if (bookmarked) {
       if (bookmark.bookmarks!==undefined) {
         if (bookmark.bookmarks.message =="Bookmark successfully made.") {
           classIcon = "fas fa-bookmark fa-active";
           labelBookmark = "Unbookmark";
         } else {
           classIcon = "far fa-bookmark";
           labelBookmark = "Bookmark";
         }
       } else {
         classIcon = "fas fa-bookmark fa-active";
         labelBookmark = "Unbookmark";
       }

     } else {
       if(bookmark === undefined){
         //Do nothing
         classIcon = "far fa-bookmark";
         labelBookmark = "Bookmark";
       }else{
        if (bookmark.bookmarks!==undefined) {
          if (bookmark.bookmarks.message =="Bookmark successfully made.") {
            classIcon = "fas fa-bookmark fa-active";
            labelBookmark = "Unbookmark";
          } else {
            classIcon = "far fa-bookmark";
            labelBookmark = "Bookmark";
          }
        } else {
          classIcon = "far fa-bookmark";
          labelBookmark = "Bookmark";
        }
       }
     }

    return (
      <button className="dropdown-item more btn-link" type="button" id={slug} onClick={this.handleClick}>
        <i className={classIcon}  />
        &nbsp;
        {labelBookmark}
      </button>
    );
  }

}

BookmarkButton.propTypes = {
  actions: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool.isRequired,
  bookmark: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    bookmark: state.Bookmarks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookmarksActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
