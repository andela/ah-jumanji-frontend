import axios from 'axios';
import {toastNotification } from '../common/common';
import { GOT_ARTICLE, ERROR_GETTING_ARTICLE} from '../actionTypes';
import getUserCookie from '../../../common/utils/readTokens';

export const getArticles = (slug) =>dispatch=> {

      const token = getUserCookie();
      let url = `https://ah-jumanji-staging.herokuapp.com/api/articles/${slug}/`;
      let fetch = axios.get(url, {
          headers: {
            Accept: "application/json",
            Authorization: `Token ${token}`
         },
            crossDomain: true
        })
        .then((response) => {
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
        payload: "Could not get that article"
    };
}
