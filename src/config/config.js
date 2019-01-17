const baseUrl = process.env.BASE_URL;

const config = {
    api: {
        loginUrl: baseUrl + '/api/users/login'
    },
    firebase: {
        apiKey: process.env.FIREBASE_API_KEY || 'random',
        authDomain: process.env.FIREBASE_AUTH_DOMAIN
      }
};

export default config;
