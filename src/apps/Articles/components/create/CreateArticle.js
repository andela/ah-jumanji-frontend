import React,{ Component } from 'react';
import CreateArticle from './_articleform';

class ArticlePage extends Component{
    render(){
        return(
          <div className="container auth-container">
            <div className="article-view col-md-10">
              <div className="col-md-12">
                <CreateArticle />
              </div>
            </div>
          </div>
        );
    }
}

export default ArticlePage;
