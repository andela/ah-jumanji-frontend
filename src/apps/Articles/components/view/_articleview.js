import React from 'react';
import PropTypes from 'prop-types';
import {
    connect
  } from 'react-redux';
  import { read_cookie } from 'sfcookies';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import { getArticles } from '../../actions/fetch/_get_actions';
import { startFunction } from '../edit/_articleedit';


class EditorView extends React.Component{

    constructor(props){
        super(props);

        const { slug } = props;
        this.state = {
            model:'Wait for it...',
            slug:slug
        };
    }

    componentDidMount(){
        startFunction(this.state, this.props);
    }


    button = (link, slug, type, value) =>{
        return(
          <li className="publish-nav-item">
            <a
              href={link} onClick={()=>{
                window.location.replace(`/a/edit_article/${slug}`);
              }} className={type}>
              { value }
            </a>
          </li>
          );
    }

    render(){
        const myProps = this.props;
        const myState = this.state;
        if(myProps.Articles === undefined){
            return(
              <div>
                <br />
                <FroalaEditorView
                model={myState.model}
                />
              </div>
              );
        }else{
        //Articles Prop has something
        return(
          <div>
            <div className="publish-div">
              {read_cookie('loggedInUsername') === read_cookie("article_author") ? this.button("#", myProps.slug, "btn btn-outline-warning  btn-sm", "Edit Story"): ""}
            </div>
            <br />
            <FroalaEditorView
            model={myProps.Articles.body}
            />
          </div>
          );
        }
    }
}

EditorView.propTypes = {
    slug: PropTypes.string.isRequired
};

export function mapStateToProps(state, myProps) {
    return {
        Articles: state.Articles.read_article,
        myProps
    };
  }
export default connect (mapStateToProps, {getArticles})(EditorView);