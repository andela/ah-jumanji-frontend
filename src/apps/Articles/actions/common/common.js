import {toast} from 'react-toastify';
import article_date from 'number-to-date-month-name';

export function redirectUrl(url){
    setTimeout(function(){ openWindow(url); }, 1000);
}

 export function openWindow(url){
    window.location.replace(url);
}

export function toastNotification(type, message){
    switch (type) {
        case "success":
        return toast.success(`🦄 ${message}`, { position: toast.POSITION.TOP_RIGHT, autoClose: 800 });

         case "warn":
        return toast.warn(`🦄 ${message}`, { position: toast.POSITION.TOP_RIGHT, autoClose: 800 });

         case "error":
        return toast.error(`🦄 ${message}`, { position: toast.POSITION.TOP_RIGHT, autoClose: 1200 });

         default:
        return toast("hello");
    }
}

export function onButtonPressed(action, body, slug, le_props){
    switch (action) {
        case "update":
            //update state
            le_props.updateArticle(body, slug);
            return "update";

        case "delete":
            //update state
            le_props.deleteArticle(slug);
            return "delete";

        default:
            return "nothing";
    }

}

export const articleTime = (time) => {
    let publish_date = time.split("-");
    let year = parseInt(publish_date[0]);
    let month = article_date.toMonth(parseInt(publish_date[1]), 's');
    let day = parseInt(publish_date[2].substr(0,2));
  return `${month} ${day} ${year}`;
};


export const readTime = (time) => {
    const sec = 60;
    let result  = time / sec;
    if(result < 1){
        return Math.ceil(result) +" sec";
    }else if(time > 3599){
        return "1 hr plus";
    }else{
        return Math.ceil(result) + " min";
    }
};
