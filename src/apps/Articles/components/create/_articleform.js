import React from 'react';
import {
    connect
  } from 'react-redux';
  import { toast } from 'react-toastify';
//Froala stuff
import 'froala-editor/js/froala_editor.pkgd.min';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';

import {postArticle} from '../../actions/post/_post_actions';

class CreateArticle extends React.Component{
    constructor(props){
        super(props);
        this.onDataSent = this.onDataSent.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);

        this.state = {
          model: ''
        };
    }

    onDataSent(){
        //update state
        let myState = this.state;
        let myProps = this.props;
        myProps.postArticle(myState.model);
    }

    handleModelChange(model) {
        this.setState({
          model: model
        });
      }

    render(){
        let pt = "#";
        let myProps = this.state;
        return(
          <div>
            <br />
            <div className="publish-div">
              <li className="publish-nav-item">
                <a
                href={pt} onClick={()=>{
                    this.onDataSent("Success button clicked");
                }}
                className="btn btn-outline-success btn-sm">
                    Publish Story
                </a>
              </li>
            </div>
            <FroalaEditor
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
                        toast.error(error+" & "+response,{ position: toast.POSITION.TOP_RIGHT });
                        //respond
                    }
                }
            }
           }}
           />
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
export default connect (mapStateToProps, {postArticle})(CreateArticle);
