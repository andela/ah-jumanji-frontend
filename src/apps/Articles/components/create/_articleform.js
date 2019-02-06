import React from 'react';
import PropTypes from 'prop-types';
import {
    connect
  } from 'react-redux';
//Froala stuff
import 'froala-editor/js/froala_editor.pkgd.min';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';
import { toastNotification } from '../../actions/common/common';
import {postArticle} from '../../actions/post/_post_actions';

class CreateArticle extends React.Component{
    constructor(props){
        super(props);
        this.onDataSent = this.onDataSent.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleTitleInput = this.handleTitleInput.bind(this);

        this.state = {
          model: '',
          title: ''
        };
    }

    onDataSent(){
      //update state
      let myState = this.state;
      let myProps = this.props;
      let data = {
        body: myState.model,
        title : myState.title
      };
      myProps.postArticle(data);
    }

    handleModelChange(model) {
      this.setState({
        model: model
      });
    }

    handleTitleInput(e) {
      this.setState({
        title: e.target.value
      });
    }

    render(){
      let myProps = this.state;
      return(
        <div className="edit-article-view">
          <div>
            <input onChange={this.handleTitleInput} className="article-title" name="title" placeholder="Title" />
            <FroalaEditor
              className="article-body"
              tag="textarea"
              model={myProps.model}
              onModelChange={this.handleModelChange}
              config={{
                placeholderText: "What's on your mind?",
                charCounterCount: false,
                toolbarInline: true,
                imageUploadParam: 'image_file',
                imageUploadURL: 'https://ah-jumanji-staging.herokuapp.com/api/articles/image/upload',
                imageUploadParams: {upload_preset: 'rb7lio7r'},
                imageUploadMethod: 'POST',
                requestWithCORS: true,
                imageMaxSize: 5 * 1024 * 1024, // Set max image size to 5MB.
                imageAllowedTypes: ['jpeg', 'jpg', 'png'], // Allow to upload PNG and JPG.
                events: {
                    'froalaEditor.image.error': function (e, editor, error, response) {
                        //error occurs
                        if (error) {
                          toastNotification(error,"error"+" & "+response);
                            //respond
                        }
                    }
                  }
              }}
            />
          </div>
          <button
            type="button"
            onClick={()=>{
                this.onDataSent();
            }}
            className="btn btn-outline-success btn-sm publish-btn">
            Publish
          </button>
        </div>
      );
    }
}

export function mapStateToProps(state, myProps) {
  return {
    Articles: state.articles,
    myProps
  };
}
export function mapDispatchToProps(dispatch) {
    return {
      // Authentication functions
      postArticle: (data) => dispatch(postArticle(data)),
    };
  }
export default connect (mapStateToProps, mapDispatchToProps)(CreateArticle);
