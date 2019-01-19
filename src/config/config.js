const baseUrl = process.env.BASE_URL;

const config = {
    api: {
        loginUrl: baseUrl + '/api/users/login',
        ratingUrl: baseUrl + ''
    }
};

export default config;
