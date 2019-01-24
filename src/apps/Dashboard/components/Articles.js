import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import { toast } from 'react-toastify';
import 'jquery';
import PropTypes from 'prop-types';
import { bake_cookie, read_cookie } from 'sfcookies';

import * as dashboardActions from '../actions/dashboardActions';

import LoaderData from '../../common/components/LoaderData';
import ArticlesData from './ArticlesData';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    let onLogin = read_cookie('onLogin');

    if (onLogin==true) {
      toast.success( "Login Successful!", {autoClose: 3000});
    }

    bake_cookie('onLogin', false);

    const {actions} = this.props;
    actions.fetchArticle();

    setTimeout(() => {
      this.setState({ isLoading: false });
      // check if all images are loaded first
      // then instantiate the masonry layout.
      imagesLoaded('.grid', function() {
        let msnry = new Masonry( '.grid',{
          // options
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer'
        });
        msnry.reloadItems();
      });

    }, 1800);

  }

  render() {
    let { isLoading } = this.state;
    const {articles} = this.props;
    return ( isLoading ? ( <LoaderData />) : ( <ArticlesData articles={articles.articles} /> ) );
  }
}

Articles.propTypes = {
  actions: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    articles: state.Dashboard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dashboardActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Articles);
