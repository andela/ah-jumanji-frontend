import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import { toast } from 'react-toastify';
import 'jquery';
import PropTypes from 'prop-types';
import { bake_cookie, read_cookie } from 'sfcookies';

import * as dashboardActions from '../actions/dashboardActions';

import LoaderData from '../../common/components/LoaderData';
import defaultUserIcon from '../../../assets/img/default-avatar.jpg';
import articlePlaceholder from '../../../assets/img/placeholder.png';
import ArticleComponent from './ArticleComponent';


class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    let onLogin = read_cookie('onLogin');
    if (onLogin === true) {
      toast.success( "Login Successful!", {autoClose: 3000});
    }

    bake_cookie('onLogin', false);

    const {actions} = this.props;
    actions.fetchArticle();

    setTimeout(() => {
      this.setState({ isLoading: false });
      // check if all images are loaded first
      // then instantiate the masonry layout.
      imagesLoaded('.grid', function() {
        let msnry = new Masonry( '.grid',{
          // options
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer'
        });
        msnry.reloadItems();
      });

    }, 3600);

  }



  data = () => {
    const { articles } = this.props;

    if (articles.articles !== undefined) {
      const f = articles.articles;
      const r = [];
      let articleImg = '';
      for (const i in f) {
        if (f[i].body.indexOf('src') > -1) {
          const imageSplit = f[i].body.substring(f[i].body.indexOf('src=') + 1);
          articleImg = imageSplit.split(/"/)[1];
        } else {
          articleImg = articlePlaceholder;
        }

        const t = (
          <ArticleComponent
            key={i}
            articleImage={articleImg}
            articleSlug={f[i].slug}
            articleLikes={f[i].likes}
            articleComments={f[i].comments}
            articleRatings={f[i].ratings}
            articleAvatar={f[i].author.profile_photo !== '' ? f[i].author.profile_photo : defaultUserIcon}
            authorName={f[i].author.user}
            articleTitle={f[i].title}
            bookmarked={f[i].bookmarked}
          />
        );
        r.push(t);
      }
      return (r);
    }
  }

  render() {
    let { isLoading } = this.state;

    return ( isLoading ? ( <LoaderData />) : (
      <div className="grid" id="grid">
        <div className="grid-sizer" />
        {this.data()}
      </div>
      )
    );
  }
}

Articles.propTypes = {
  actions: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    articles: state.Dashboard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dashboardActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Articles);
