/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchArticleRating, postArticleRating} from '../actions/ratingActions';


class Rating extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { fetchArticleRating } = this.props;
    fetchArticleRating();
  }

  handleClick(newRating){
    const ratingData = {
      "rating": newRating
    };
    const { postArticleRating } = this.props;
    postArticleRating(ratingData);
  }
  render() {
    const {Rating} = this.props;
    const rated = Rating.rating == "Article has no ratings" ? 0 : Rating.rating;
    return (
      <StarRatings
        rating={rated}
        starDimension="20px"
        starSpacing="2px"
        starRatedColor="orange"
        starEmptyColor="lightgray"
        starHoverColor="orange"
        changeRating={this.handleClick}
      />
    );
  }
}

Rating.propTypes = {
  fetchArticleRating: PropTypes.func.isRequired,
  Rating: PropTypes.object.isRequired,
  postArticleRating: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
  return {
    Rating: state.ratingReducer.averageRating
  };
}
export default connect(mapStateToProps, { fetchArticleRating, postArticleRating })(Rating);