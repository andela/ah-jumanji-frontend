import axios from 'axios';
import { read_cookie } from 'sfcookies';
import {redirectUrl, toastNotification } from '../common/common';
import {POSTING_ARTICLE, POSTED_ARTICLE, ERROR_POSTING_ARTICLE} from '../actionTypes';

export const postArticle = (body) =>dispatch=> {
    let article_data = {
        "title": articleCreator(body,0), //Get the title
        "description": articleCreator(body,0), // Get first paragraph
        "body": body,"tagList": "[default]"};

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
              toastNotification("success", "Could not post that article!");
          });
      }
};

export function articleCreator(data,num){
    //retrieve only
    let p_title = data.replace('<[^>]+>', data);
    let html = p_title; // All paragraphs in text

    let par_list = html.split("</p>"); //Array at p tags
    let title = par_list[num].replace("<p>","").trim(); //title

    let para = document.createElement("p");
    para.innerHTML = title;
    return para.innerText;
}

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
