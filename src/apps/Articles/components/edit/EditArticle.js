import React,{ Component } from 'react';
import { read_cookie } from 'sfcookies';
import ArticleEdit from './_articleedit';
import { openWindow} from '../../actions/common/common';

class ArticlePage extends Component{
    constructor(props){
        super(props);
        const token = read_cookie('token');
        if(token.length === 0){
          openWindow(`/`);
        }
    }

    getSlug(){
        //Get slug from ulr
        const myProps = this.props;
        return myProps.match.params.slug;
    }

    render(){
        return(
          <div className="container auth-container">
            <div className="article-view col-md-10">
              <div className="col-md-12">
                <ArticleEdit slug={this.getSlug()} />
              </div>
            </div>
          </div>
        );
    }
}

export default ArticlePage;