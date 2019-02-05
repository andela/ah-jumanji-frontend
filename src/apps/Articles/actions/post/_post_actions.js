import axios from 'axios';
import { read_cookie } from 'sfcookies';
import {redirectUrl, toastNotification } from '../common/common';
import {POSTING_ARTICLE, POSTED_ARTICLE, ERROR_POSTING_ARTICLE} from '../actionTypes';

export const postArticle = (data) =>dispatch=> {
    let article_data = {
         "title": data.title, //Get the title
         "description": data.body.slice(0, 25) + " ...", // Get first paragraph
         "body": data.body,
         "tagList": "[default]"};

       if(article_data.title === ""){
         toastNotification("warn", "You need a title");
       }else{
         //dispatch(postingArticle(article_data));
         let url = "https://ah-jumanji-staging.herokuapp.com/api/articles/";
         return axios.post(url, article_data, {
             headers: {
                 Accept: "application/json",
                 Authorization: `Token ${read_cookie("token")}`
                 },crossDomain: true
             }).then((response) => {
             //Posting success
             dispatch(postedArticle(response.data));
             toastNotification("success", "Article Posted");
             redirectUrl(`/a/view_article/${response.data.article.slug}`);
           }).catch((err) => {
               dispatch(postingError(err));
               toastNotification("error", "Could not post that article!");
           });
       }
};

export function postingArticle(data){
    return{
        type: POSTING_ARTICLE,
        payload:{
            data,
            posting:true,
            fetching:false
        }
    };
}

export function postedArticle(data){
    return{
        type: POSTED_ARTICLE,
        payload:{
            data,
            posting: false,
            fetching: false
        }
    };
}

export function postingError(){
    return{
        type: ERROR_POSTING_ARTICLE,
        payload:"Could not post"
    };
}
