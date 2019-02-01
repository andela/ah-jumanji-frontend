import { toast} from 'react-toastify';

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
