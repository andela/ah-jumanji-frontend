import React from 'react';
import PropTypes from 'prop-types';
import {read_cookie} from 'sfcookies';
import {
    connect
  } from 'react-redux';
  import { toast } from 'react-toastify';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';
import { getArticles } from '../../actions/fetch/_get_actions';
import { Button } from '../common/_components';
import { updateRealtime, updateArticle } from '../../actions/update/_update_actions';
import { deleteArticle } from '../../actions/delete/_delete_actions';


class EditorEditView extends React.Component{

    constructor(props){
        super(props);

        this.handleEditChange = this.handleEditChange.bind(this);
        this.authorCheck = this.authorCheck.bind(this);

        const { slug } = props;
        this.state = {
            model:'',
            slug:slug
        };
    }

    componentDidMount(){
        startFunction(this.state,this.props);
    }

    handleEditChange(model) {
        let myProps = this.props;
        myProps.updateRealtime(model);
        this.setState({
          model: model
        });
      }

    authorCheck(type, bootstrap, value, article_body, slug){
        if(read_cookie('loggedInUsername') === read_cookie("article_author")) {
            return Button("#", type, bootstrap, value, article_body, slug, this.props);
        }else{
            return "";
       }
    }

    render(){
        const myProps = this.props;
        const myState = this.state;
        if(myProps.Articles === undefined){
            return(
              <div>
                <br />
                <FroalaEditor
                model={myState.model}
                tag="textarea"
                config={{placeholderText: "Nothing here to edit...",
                charCounterCount: false,toolbarInline: true,}}
                />
              </div>
            );

        }else{
            let article_body = myProps.Articles.body;
            let data = {
                body: myProps.Articles.body,
                title: myProps.Articles.title
            };
            myState.model = article_body;
            return(
              <div>
                <br />
                <div className="publish-div">
                  { this.authorCheck("update", "btn btn-outline-warning  btn-sm", "Update Story", data, myState.slug)}
                  { this.authorCheck( "delete", "btn btn-outline-danger  btn-sm", "Delete Story", data, myState.slug)}
                </div>
                <FroalaEditor
                tag="textarea"
                model={myState.model}
                onModelChange={this.handleEditChange}
                config={{placeholderText: "Nothing here to edit...",
                charCounterCount: false,toolbarInline: true,imageUploadParam: 'image_file',
                imageUploadURL: 'https://ah-jumanji-staging.herokuapp.com/api/articles/image/upload',
                imageUploadMethod: 'POST',requestWithCORS: true,
                imageMaxSize: 5 * 1024 * 1024,imageAllowedTypes: ['jpeg', 'jpg', 'png'],
                events: {'froalaEditor.image.error': function (e, editor, error, response) {
                        if (error) {toast.error(error + " " + response,{ position: toast.POSITION.BOTTOM_CENTER });}
                    }}
               }}
               />
              </div>
          );
        }
    }
}

export function startFunction(le_state, le_props){
    let articleSlug = le_state.slug;
    le_props.getArticles(articleSlug);
}

EditorEditView.propTypes = {
    slug: PropTypes.string.isRequired
};

export function mapStateToProps(state, myProps) {
    return {
        Articles: state.Articles.read_article,
        myProps
    };
  }

  export function mapDispatchToProps(dispatch) {
    return {
      // Authentication functions
      getArticles: (data) => dispatch(getArticles(data)),
      updateArticle: (body, slug) => dispatch(updateArticle(body, slug)),
      updateRealtime: (data) => dispatch(updateRealtime(data)),
      deleteArticle: (data) => dispatch(deleteArticle(data)),
    };
  }

export default connect (mapStateToProps, mapDispatchToProps)(EditorEditView);
