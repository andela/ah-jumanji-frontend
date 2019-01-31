import axios from 'axios';
import { read_cookie } from 'sfcookies';
import {redirectUrl,toastNotification } from '../common/common';
import {DELETING_ARTICLE, ERROR_DELETING_ARTICLE, DELETED_ARTICLE} from '../actionTypes';

export const deleteArticle = (slug) =>dispatch=> {

    const token = read_cookie("token");
    dispatch(deletingArticle(slug));
    let url = `https://ah-jumanji-staging.herokuapp.com/api/articles/${slug}/`;
    let Call =  axios.delete(url, {
        headers: {
            Accept: "application/json", //transfer type
            Authorization: `Token ${token}`
        },
            crossDomain: true //allow from different servers
        })
        .then((response) => {
            dispatch(deletedArticle(response.data));
            toastNotification("success","Article Deleted");
            redirectUrl(`/a/home${response.data.article.slug}`);
        })
        .catch((err) => {
            dispatch(deleteError(err));
            toastNotification("error","Could not delete that article!");
        });
        return Call;
};

export function deletingArticle(data){
    return{
        type: DELETING_ARTICLE,
        payload:{
            deleted: data,
            deleting:true
        }
    };
}

export function deletedArticle(data){
    return{
        type: DELETED_ARTICLE,
        payload:{
            deleted: data,
            posting: false,
            fetching: false
        }
    };
}

export function deleteError(){
    return{
        type: ERROR_DELETING_ARTICLE,
        payload:"Cannot delete"
    };
}
