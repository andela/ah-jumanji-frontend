// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';

import React from 'react';
import PropTypes from 'prop-types';
import {
    connect
  } from 'react-redux';
import { toast } from 'react-toastify';
import {read_cookie} from 'sfcookies';

import { getArticles } from '../../actions/fetch/_get_actions';
import { updateArticle, updateRealtime } from '../../actions/update/_update_actions';
import { deleteArticle } from '../../actions/delete/_delete_actions';



class EditorEditView extends React.Component{

    constructor(props){
        super(props);

        this.onButtonPressed = this.onButtonPressed.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
        this.userAction = this.userAction.bind(this);
        this.button = this.button.bind(this);

        const { slug } = props;
        this.state = {
            model:'',
            slug:slug
        };
    }

    componentDidMount(){
        startFunction(this.state,this.props);
    }

    onButtonPressed(action){
        let myState = this.state;
        let myProps = this.props;

        read_cookie('loggedInUsername') === read_cookie("article_author") ?
        this.userAction(action, myState, myProps)
        :
        toast.warn('🦄 You cant perform this!',{ position: toast.POSITION.TOP_RIGHT });
    }

    button = (link, call, type, value) =>{
        return(
          <li className="publish-nav-item">
            <a
              href={link} onClick={()=>{
              this.onButtonPressed(call);
              }} className={type}>
              { value }
            </a>
          </li>
          );
    }
    userAction(action, myState, this_props){
        switch (action) {
            case "update":
                //update state
                this_props.updateArticle(this_props.Articles.body, myState.slug);
                break;
            case "delete":
                //update state
                this_props.deleteArticle(myState.slug);
                break;
            default:
                break;
        }
    }
    handleEditChange(model) {
        let myProps = this.props;
        myProps.updateRealtime(model);
        this.setState({
          model: model
        });
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
                config={{placeholderText: "Nothing here to edit...",
                charCounterCount: false,toolbarInline: true,}}
                />
              </div>
            );

        }else{
            let article_body = myProps.Articles.body;
            myState.model = article_body;
            return(
              <div>
                <br />
                <div className="publish-div">
                  { this.button("#", "update", "btn btn-outline-warning  btn-sm", "Update Story")}
                  { this.button("#", "delete", "btn btn-outline-danger  btn-sm", "Delete Story")}
                </div>
                <FroalaEditor
                tag="textarea"
                model={myState.model}
                onModelChange={this.handleEditChange}
                config={{placeholderText: "Nothing here to edit...",
                charCounterCount: false,toolbarInline: true,imageUploadParam: 'image_file',
                imageUploadURL: 'https://ah-jumanji-staging.herokuapp.com/api/articles/image/upload',
                imageUploadMethod: 'POST',
                requestWithCORS: true,
                imageMaxSize: 5 * 1024 * 1024,imageAllowedTypes: ['jpeg', 'jpg', 'png'],
                events: {'froalaEditor.image.error': function (e, editor, error, response) {
                        if (error) {toast.error(`Could not upload image.(${response})`,{ position: toast.POSITION.BOTTOM_CENTER });}
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
export default connect (mapStateToProps, {getArticles, updateArticle, updateRealtime,deleteArticle})(EditorEditView);
