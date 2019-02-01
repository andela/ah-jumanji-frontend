import axios from 'axios';
import { read_cookie, bake_cookie } from 'sfcookies';
import {toastNotification } from '../common/common';
import { GOT_ARTICLE, ERROR_GETTING_ARTICLE} from '../actionTypes';

export const getArticles = (slug) =>dispatch=> {

    const token = read_cookie("token");
      let url = `https://ah-jumanji-staging.herokuapp.com/api/articles/${slug}/`;
      let fetch = axios.get(url, {
          headers: {
            Accept: "application/json",
            Authorization: `Token ${token}`
         },
            crossDomain: true
        })
        .then((response) => {
            bake_cookie("article_author", response.data.articles.author.user);
            dispatch(gotArticle(response.data.articles));
        })
        .catch((err) => {
            dispatch(getError(err));
            toastNotification("error", "Could not get that article!");
        });
    return fetch;
};

export function gotArticle(data){
    return{
        type: GOT_ARTICLE,
        payload:{
            read_article: data,
            posting: false,
            fetching: false
        }
    };
}

export function getError(){
    return{
        type: ERROR_GETTING_ARTICLE,
        payload: {message: "Could not get that article"}
    };
}
