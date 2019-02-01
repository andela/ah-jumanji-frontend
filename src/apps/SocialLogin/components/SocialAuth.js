import React, {
  Component
} from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { bake_cookie } from 'sfcookies';
import {
  connect
} from 'react-redux';
import {redirectUrl} from '../../Articles/actions/common/common';
import * as SocialFunc from '../actions/SocialActions';

import {
  auth,
  GoogleProvider,
  FacebookProvider,
  TwitterProvider
} from './firebase';

import {
  FACEBOOK,
  GOOGLE,
  TWITTER
} from '../actions/actionTypes';

class SocialAuthActions extends Component {
  constructor(props) {
    super(props);

    this.onsubmitHandler = this.onsubmitHandler.bind(this);
    this.getSocialstuff = this.getSocialstuff.bind(this);
    this.consumeEndPoint = this.consumeEndPoint.bind(this);
    this.actionCaller = this.actionCaller.bind(this);
    this.renderbutton = this.renderbutton.bind(this);
  }

  onsubmitHandler(access) {
    let tokenData = null;

    if (access.provider === "twitter") {
      tokenData = {
        "provider": access.provider,
        "access_token": access.accessToken,
        "access_token_secret": access.accessSecret
      };

    } else {
      tokenData = {
        "provider": access.provider,
        "access_token": access.accessToken
      };

    }
    this.consumeEndPoint(tokenData);
    return tokenData;
  }

  getSocialstuff(oauthprovider, platform, the_type) {
    const dataFetch = this.props;
    auth.signInWithPopup(oauthprovider).then(function (result) {
      return {
        type: the_type,
        payload: {
          authData: {
            provider: platform,
            accessToken: result.credential.accessToken,
            accessSecret: result.credential.secret
          },
          userDetails: {
            name: result.user.displayName,
            photo: result.user.photoURL,
            email: result.user.email
          }
        }
      };
    }).then((response) => {
      this.actionCaller(response);
    }).catch((err) => {
      dataFetch.failedCall(err);
      toast.warn('🦄 Did you register with another platform account before?', {
        position: toast.POSITION.TOP_RIGHT
      });
    });
  }

  consumeEndPoint(tokenData){
    const passedData = this.props;
    let url = process.env.SOCIAL_AUTH_API_URL;
    passedData.fetchingCall();
    let fetch = axios.post(url, tokenData, {
        headers: {
          Accept: "application/json" }, crossDomain: true
      })
      .then((response) => {
        passedData.receivedUsers(response.data);
        let username = response.data.login_data.username;
        bake_cookie("loggedInUsername", username);// Set username cookie

        let token = response.data.social_token;
        token = token.replace("Token","").trim();
        bake_cookie("token", token);// Set cookie
        redirectUrl('/a/home');
      })
      .catch((err) => {
        passedData.failedCall(err);
        toast.error('🦄 Something went horribly wrong!',{ position: toast.POSITION.TOP_RIGHT });
      });
      return fetch;
  }

  actionCaller(response){
    const dataFetch = this.props;
    switch (response.type) {
      case FACEBOOK:
        dataFetch.FacebookAuth(response);
        break;

      case GOOGLE:
        dataFetch.GoogleAuth(response);
        break;

      case TWITTER:
        dataFetch.TwitterAuth(response);
        break;

      default:
        break;
    }
    this.onsubmitHandler(response.payload.authData);
  }

  renderbutton(authProvider, platform, type, btn_name, btn_class, btn_type){
    return (
      <button type="button" className={btn_type} onClick={() => this.getSocialstuff(authProvider, platform, type)}>
        <i className={btn_class} />
        &nbsp;
        {btn_name}
      </button>
  );
  }

  render() {
    return (
      <div>
        <h3 className="text-center">
        Or
        </h3>
        <div className="text-center">
          <div className="btn-group" role="group" aria-label="socialauth">
            { this.renderbutton(FacebookProvider, 'facebook', FACEBOOK, 'Facebook', 'fab fa-facebook-square', 'btn btn-facebook') }
            { this.renderbutton(GoogleProvider, "google-oauth2", GOOGLE, 'Google', 'fab fa-google', 'btn btn-google') }
            { this.renderbutton(TwitterProvider, "twitter", TWITTER, 'Twitter', 'fab fa-twitter-square', 'btn btn-twitter') }
          </div>
        </div>
        <hr />
      </div>

    );
  }
}

  export function mapStateToProps(state, myProps) {
    return {
      socialAuth: state.socialAuth,
      myProps
    };
  }

  export function mapDispatchToProps(dispatch) {
    return {
      // Authentication functions
      FacebookAuth: (data) => dispatch(SocialFunc.FacebookAuth(data)),
      GoogleAuth: (data) => dispatch(SocialFunc.GoogleAuth(data)),
      TwitterAuth: (data) => dispatch(SocialFunc.TwitterAuth(data)),

      // Messaging functions
      receivedUsers: fetched_data => dispatch(SocialFunc.receivedUsers(fetched_data)),
      fetchingCall: () => dispatch(SocialFunc.fetchingCall()),
      failedCall: error => dispatch(SocialFunc.failedCall(error)),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SocialAuthActions);
