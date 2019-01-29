import React,{ Component } from 'react';
import ArticleEdit from './_articleedit';

class ArticlePage extends Component{
    constructor(props){
        super(props);
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
                <ArticleEdit slug={this.getSlug()} />
              </div>
            </div>
          </div>
        );
    }
}

export default ArticlePage;