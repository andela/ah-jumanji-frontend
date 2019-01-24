import axios from 'axios';

import { read_cookie } from 'sfcookies';

import * as types from  './actionTypes';

import config from '../../../config/config';

const endpointGetArticles = config.api.getArticlesUrl;
const endpointArticleLikes = config.api.endpointArticleLikes;
const endpointArticleComments = config.api.articleCommentsUrl;
const endpointRating = config.api.ratingUrl;
const token = read_cookie('token');


export function FetchSucess(articles) {
    return {
        type: types.FETCH_SUCCESS,
        articlesData: articles
    };
}

export function FetchFailed(error) {
    return {
        type: types.FETCH_FAILED,
        error
    };
}


export function fetchArticle() {
    return function (dispatch) {
        return axios.get(endpointGetArticles, {
          headers: {
            Accept: 'application/json',
            Authorization: 'Token '+token
          }
        })
        .then(res => {
            //loop through res and get slug of each article.
            let r = res.data.results;
            let ar = [];
            for (const i in r) {
              let slug = r[i].slug;
              // add likes, comments and rating of each article in the payload
              axios.all([fetchArticleLikes(slug), fetchArticleComments(slug), fetchArticleRating(slug)]).then(
                axios.spread(
                  (likes, comments, ratings) =>{
                  r[i]['likes'] = likes;
                  r[i]['comments'] = comments;
                  r[i]['ratings'] = ratings;
                  ar.push(r[i]);
                  }
                )
              );
            }
            dispatch(FetchSucess(ar));

        })
        .catch( error => {
          dispatch(FetchFailed(error));
        });
    };
}

const fetchArticleLikes = (slug) => {
  return axios.get(endpointArticleLikes+slug, {
    headers: {
      Accept: 'application/json',
      Authorization: 'Token '+token
    }
  })
  .then(res => {
      return(res.data.number_of_reactions.likes);
  })
  .catch( error => {
    return(error);
  });
};

const fetchArticleComments = (slug) => {
  return axios.get(endpointArticleComments+slug+'/comments', {
    headers: {
      Accept: 'application/json',
      Authorization: 'Token '+token
    }
  })
  .then(response => {
      return(response.data.comment.length);
  })
  .catch( error => {
    return(error);
  });
};

const fetchArticleRating = (slug) => {
  return axios.get(endpointRating+slug+'/rating', {
      headers: {
          Accept: 'application/json',
          Authorization: `Token ${token}`
      }
  }).then(res => {
      //get rating
      let newResponse = "";
      if (res.data.rating=="Article has no ratings") {
        newResponse = 0;
      } else {
        newResponse = res.data.rating;
      }
      return(newResponse);
  })
  .catch(error => {
    return(error);
  });
};
