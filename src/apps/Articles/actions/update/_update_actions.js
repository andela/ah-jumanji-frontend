import axios from 'axios';
import { read_cookie } from 'sfcookies';
import {redirectUrl, toastNotification } from '../common/common';
import {UPDATING_ARTICLE, UPDATED_ARTICLE, UPDATED_ERROR,UPDATING_CURRENT} from '../actionTypes';
import {articleCreator} from '../post/_post_actions';

export const updateArticle = (body,slug) =>dispatch=> {
    const token = read_cookie("token");
    let updated_data = {
        "title": articleCreator(body,0), //Get the title
        "description": articleCreator(body,0), // Get first paragraph
        "body": body,
        "tagList": "[default]"
      };
      if(updated_data.title === ""){
        toastNotification("warn", "You need a title");
      }else{
        let updateUrl = `https://ah-jumanji-staging.herokuapp.com/api/articles/${slug}/`;
        let TheCall = axios.put(updateUrl, updated_data, {
            headers: {Accept: "application/json",Authorization: `Token ${token}`},crossDomain: true
          }).then((response) => {
            //Update successfull
            dispatch(updatedArticle(response.data));
            toastNotification("success", "Article Updated");
            redirectUrl(`/a/view_article/${response.data.article.slug}`);
          }).catch((err) => {
              dispatch(updateError(err));
              toastNotification("error", "Could not update that article!");
          });
        return TheCall;
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
            updating: false,
            fetching: false
        }
    };
}

export function updateError(){
    return{
        type: UPDATED_ERROR,
        payload: {message: "Could not update"}
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
