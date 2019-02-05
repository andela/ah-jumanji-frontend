import React from 'react';
import PropTypes from 'prop-types';
import {read_cookie} from 'sfcookies';
import {
    connect
  } from 'react-redux';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import { getArticles } from '../../actions/fetch/_get_actions';
import { startFunction } from '../edit/_articleedit';
import { openWindow } from '../../actions/common/common';
import { FollowComponent } from '../common/_components';
import BookmarkButton from "../../../Bookmarks/components/BookmarkButton";


class EditorView extends React.Component{

    constructor(props){
        super(props);

        this.button = this.button.bind(this);
        this.onEditPressed = this.onEditPressed.bind(this);
        const { slug } = props;
        this.state = {
            model:'Wait for it...',
            slug:slug
        };
    }

    componentDidMount(){
        startFunction(this.state, this.props);
        return 'mounted';
    }

    onEditPressed(slug){
        openWindow(`/a/edit_article/${slug}`);
    }

    button = (link, slug, type, value) =>{
        return(
          <li className="publish-nav-item">
            <a
              href={link} onClick={()=>{
                openWindow(`/a/edit_article/${slug}`);
              }} className={type}>
              { value }
            </a>
          </li>
          );
    };
    render(){
        const myProps = this.props;
        const myState = this.state;
        let bookmarked = false;
        let { Articles } = this.props;
        if (Articles) {
          bookmarked = Articles.bookmarked;
        }
        if(myProps.Articles === undefined){
            return(
              <div>
                <br />
                <FroalaEditorView model={myState.model} />
              </div>
                );
        }else{
        //Articles Prop has something
        return(
          <div>
            <br />
            <div className="publish-div">
              { read_cookie('loggedInUsername') === read_cookie("article_author") ?
                this.button("#", myProps.slug, "btn btn-outline-warning  btn-sm", "Edit Story"): ""}
            </div>
            { read_cookie('loggedInUsername') !== read_cookie("article_author") ?
                FollowComponent(myProps.Articles.author) : ""}
                <span className="float-right">
                  <BookmarkButton slug={myProps.slug} bookmarked={bookmarked} />
                </span>
            <FroalaEditorView
            model={myProps.Articles.body}
            />
            <br />
          </div>
          );
        }
    }
}

EditorView.propTypes = {
    slug: PropTypes.string.isRequired,
  Articles: PropTypes.object.isRequired,
};

export function mapStateToProps(state, myProps) {
    return {
        Articles: state.Articles.read_article,
        myProps
    };
  }
export default connect (mapStateToProps, {getArticles})(EditorView);
