[![CircleCI](https://circleci.com/gh/andela/ah-jumanji-frontend.svg?style=svg)](https://circleci.com/gh/andela/ah-jumanji-frontend)
[![Test Coverage](https://api.codeclimate.com/v1/badges/577c4dbb53e885583bee/test_coverage)](https://codeclimate.com/github/andela/ah-jumanji-frontend/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/577c4dbb53e885583bee/maintainability)](https://codeclimate.com/github/andela/ah-jumanji-frontend/maintainability)
# Authors Haven

This is an application majorly for reading and writing articles. A user can:
post, read, delete, update and share their articles or other peoples articles.

A user can be able to:
  - view their profiles
  - view other peoples profiles
  - bookmark and unbookmark articles
  - comment on articles
  - like and unlike articles
  - like and unlike specific comments
  - follow and unfollow another user

All those features will be found in our application.

## SET UP


This project has the following core dependencies:
- webpack ( the bundler)
- babel (the transpiler)
- react (the js components library)
- express (node server)
- bootstrap/popper.js for styling

The project is linted using eslint and the linting rules are defined in the `.eslintrc.json` file in the root directory. HMR (Hot Module Replacement) is enabled by default and allows for a seamless build experience during development.


To set it up , clone the repo and install the dependencies as follows:
```
git clone https://github.com/andela/ah-jumanji-frontend.git
cd ah-jumanji-frontend
```

Add the following in your environment .env file
```
BASE_URL="https://ah-jumanji-staging.herokuapp.com"
BASE_URL_FRONTEND="https://ah-jumanji-frontend.herokuapp.com"
SOCIAL_AUTH_API_URL="https://ah-jumanji-staging.herokuapp.com/api/users/social/auth"
ARTICLES_API_URL="https://ah-jumanji-staging.herokuapp.com/api/articles/"
FIREBASE_API_KEY=AIzaSyDLqlYrfTIkjXb01oA_9svo107jkV-YzAg 
FIREBASE_AUTH_DOMAIN=ah-jumanji.firebaseapp.com 
```

After saving all the env variables, go ahead and run the following commands in the terminal
```
npm install
npm audit fix
npm start
```
