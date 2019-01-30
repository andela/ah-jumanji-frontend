import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleView from './_articleview';
import Ratings from '../../../Rating/components/Rating';
import CommentsContainer from '../../../Comments/Components/CommentsContainer';
import LikeButton from "../../../Like/components/LikeButton";
import SocialIcons from '../../../ShareArticle/components/shareArticle';

class ArticlePage extends Component{
    constructor(props){
        super(props);
        this.getSlug = this.getSlug.bind(this);
    }

    getSlug(){
        //Get slug from ulr
        const myProps = this.props;
        return myProps.match.params.slug;
    }
    render(){
        let title = this.getSlug();
        let arr = title.split('-');
        let arr2 = arr.slice(0, arr.length - 2);
        let fisrtChar = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
        arr2[0] = fisrtChar;
        let passTitle = arr2.join(' ');
        return(
          <div className="container auth-container">
            <div className="row">
              <div className="col-md-12">
                <ArticleView slug={this.getSlug()} />
                <div className="row article-bottom">
                  <div className="col-md-12">
                    <LikeButton />
                    &nbsp;&nbsp;
                    <Ratings />
                    <SocialIcons title={passTitle} />
                  </div>
                </div>
                <CommentsContainer />
              </div>
            </div>
          </div>
        );
    }
}

ArticlePage.propTypes = {
  read_article: PropTypes.object.isRequired
};

const mapStateToProps = ({ Articles }) => Articles;

export default connect(mapStateToProps, null)(ArticlePage);
