import React,{ Component } from 'react';
import ArticleView from './_articleview';
import Ratings from '../../../Rating/components/Rating';
import CommentsContainer from '../../../Comments/Components/CommentsContainer';

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
        return(
          <div className="container auth-container">
            <div className="row">
              <div className="col-md-12">
                <ArticleView slug={this.getSlug()} />
                <Ratings />
                <CommentsContainer />
              </div>
            </div>
          </div>
        );
    }
}

export default ArticlePage;
