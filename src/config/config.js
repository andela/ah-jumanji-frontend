const baseUrl = process.env.BASE_URL;


const config = {
  api: {
    loginUrl: baseUrl + '/api/users/login',
    emailReset: baseUrl + '/api/users/reset_password',
    emailResetConfirm: baseUrl + '/api/users/reset_password_confirm/',
    registerUrl: baseUrl + '/api/users/register',
    activateUserUrl: baseUrl + '/api/users/activate',
    getProfileUrl: baseUrl + '/api/profiles/users/profiles',
    editProfileUrl: baseUrl + '/api/profiles/users/profiles',
    ratingUrl: baseUrl + '/api/articles/',
    getArticlesUrl: baseUrl + '/api/articles/?page=1',
    endpointArticleLikes: baseUrl + '/api/articles/reactions/',
    articleCommentsUrl: baseUrl + '/api/articles/',
    unreadNotificationsURL: baseUrl + '/api/notifications/unread',
    readNotificationsURL: baseUrl + '/api/notifications/read',
    markAllRead: baseUrl + '/api/notifications/mark_read',
    markNotificationRead: baseUrl + '/api/notifications/',
    unmarkNotificationRead: baseUrl + '/api/notifications/unmark/',
    articlesEndpoint: baseUrl + '/api/articles',
    likeUrl: baseUrl + '/api/articles/reactions',
    getLikesUrl: baseUrl + '/api/articles/reactions/mr-ruby',
    commentReactionsEndpoint: baseUrl + '/api/comments/reactions',
    viewProfile: 'https://ah-jumanji-frontend.herokuapp.com/a/profile',
  },
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY || 'random',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN
  },
  avatarImage: {
    avatarUrl: 'https://cdn-images-1.medium.com/max/1200/1*MccriYX-ciBniUzRKAUsAw.png'
  },
  cloudinary: {
    cloudinaryUrl: 'https://api.cloudinary.com/v1_1/authors-haven-jumanji/upload',
    cloudinaryUploadPreset: 'jcuci4hq'
  },
  defaultImage : "https://cdn-images-1.medium.com/max/1200/1*MccriYX-ciBniUzRKAUsAw.png"
};

export default config;
