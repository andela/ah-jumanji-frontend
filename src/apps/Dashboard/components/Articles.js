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
      currentPage: this.props.currentPage,
      newPage: this.props.currentPage
    };
  }

  componentDidMount() {
    let onLogin = read_cookie('onLogin');
    if (onLogin === true) {
      toast.success( "Login Successful!", {autoClose: 3000});
    }

    bake_cookie('onLogin', false);

    const {actions} = this.props;
    const {currentPage} = this.state;
    actions.fetchArticle(`?page=${currentPage}`);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.currentPage!==prevState.currentPage){
      return {currentPage: nextProps.currentPage};
    }
    else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const {currentPage} = this.state;
    if (prevState.currentPage !== currentPage) {
      const {actions} = this.props;
      const {currentPage} = this.state;
      actions.fetchArticle(`?page=${currentPage}`);
    }
  }



  data = () => {
    const { articles, user } = this.props;

    if (articles !== undefined) {
      let f = articles.articles;
      const r = [];
      let counter = 0;
      let articleImg = '';

      if (f!==undefined) {
        if (user!==undefined) {
          f = f.filter(person => person.author.user == user);
        }

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
            counter += 1;
        }

        if (f.length>12) {
          if (counter==12) {
            return (r);
          }
        }else {
          if (counter==f.length) {
            return (r);
          }
        }
      }

    }
  };

  masonryLoader = () => {
    return (imagesLoaded('.grid', function() {
      new Masonry( '.grid',{
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer'
      });
    }));
  }

  render() {
    let articlesLoaded = this.data();
    let loaded = false;
    this.masonryLoader();
    if (articlesLoaded!==undefined) {
      loaded = true;
      document.getElementById("overlay").style.display = "block";
      setTimeout(function(){
        document.getElementById("overlay").style.display = "none";
        imagesLoaded('.grid', function() {
          new Masonry( '.grid',{
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer'
          });
        });
      }, 1200);}
    return (
      <React.Fragment>
        <div id="overlay" />
        { !loaded ? ( <LoaderData />) : (
          <div className="grid" id="grid">
            <div className="grid-sizer" />
            {articlesLoaded}
          </div>
        )}
        { articlesLoaded!==undefined && articlesLoaded.length==0 ? (
          <div className="text-center">
            <i className="fas fa-exclamation-triangle" />
            Oops! Nothing to show
          </div>) : ( "" )}
      </React.Fragment>
    );
  }
}

Articles.propTypes = {
  actions: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired
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
