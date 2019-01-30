import axios from 'axios';
import { toast } from 'react-toastify';
import { read_cookie } from 'sfcookies';
import {DELETING_ARTICLE, ERROR_DELETING_ARTICLE, DELETED_ARTICLE} from '../actionTypes';
import {redirectUrl} from '../post/_post_actions';

export const deleteArticle = (slug) =>dispatch=> {

    const token = read_cookie("token");
    //dispatch(deletingArticle());
    let url = `https://ah-jumanji-staging.herokuapp.com/api/articles/${slug}/`;
    return axios.delete(url, {
        headers: {
            Accept: "application/json", //transfer type
            Authorization: `Token ${token}`
        },
            crossDomain: true //allow from different servers
        })
        .then((response) => {
            dispatch(deletedArticle(response.data));
            toast.success(`🦄 Article deleted`, { position: toast.POSITION.TOP_RIGHT, autoClose: 800 });
            redirectUrl(`/a/home`);
        })
        .catch((err) => {
            dispatch(deleteError(err));
            toast.error('🦄 Could not delete that article!',{ position: toast.POSITION.TOP_RIGHT });
        });

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

export function deleteError(err){
    return{
        type: ERROR_DELETING_ARTICLE,
        payload:err
    };
}
