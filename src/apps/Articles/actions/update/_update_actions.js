import axios from 'axios';
import { toast } from 'react-toastify';
import { read_cookie } from 'sfcookies';
import {UPDATING_ARTICLE, UPDATED_ARTICLE, UPDATED_ERROR,UPDATING_CURRENT} from '../actionTypes';
import {articleCreator} from '../post/_post_actions';

export const updateArticle = (body,slug) =>dispatch=> {
    const token = read_cookie("token");
    let article_data = {
        "title": articleCreator(body,0), //Get the title
        "description": articleCreator(body,0), // Get first paragraph
        "body": body,
        "tagList": "[default]"
      };
      if(article_data.title === ""){
        toast.warn('🦄 You need a title',{ position: toast.POSITION.TOP_RIGHT, autoClose: 3500 });
      }else{
        //dispatch(updatingArticle(article_data));
        let url = `https://ah-jumanji-staging.herokuapp.com/api/articles/${slug}/`;
        return axios.put(url, article_data, {
            headers: {Accept: "application/json",Authorization: `Token ${token}`},crossDomain: true
          }).then((response) => {
            //Update successfull
            dispatch(updatedArticle(response.data));
            toast.success(`🦄 ${response.data.article.slug} has been updated`, { position: toast.POSITION.TOP_RIGHT, autoClose: 3500 });
          }).catch((err) => {
              dispatch(updateError(err));
              toast.error('🦄 Could not update that article!',{ position: toast.POSITION.TOP_RIGHT });
          });
      }
};

export function updatingArticle(data){
    return{
        type: UPDATING_ARTICLE,
        payload:{
            data,
            updating:true,
            fetching:false
        }
    };
}

export function updatedArticle(data){
    return{
        type: UPDATED_ARTICLE,
        payload:{
            data,
            posting: false,
            fetching: false
        }
    };
}

export function updateError(err){
    return{
        type: UPDATED_ERROR,
        payload:err
    };
}

export function updateRealtime(new_article){
    return{
        type: UPDATING_CURRENT,
        payload:{
            read_article:{
                body:new_article
            },
            updating:true
        }
    };
}
