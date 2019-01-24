import React from 'react';
import PropTypes from 'prop-types';


const ArticleComponent = (props) => {

  const {articleImage, articleSlug, articleLikes, articleComments, articleAvatar, authorName, articleTitle} = props;

  return (
    <div className="grid-item">
      <a href={"/a/view_article/" + articleSlug}>
        <img alt="" src={articleImage} className="grid-item-img" />
      </a>
      <div className="row">
        <div className="col-md-12 like-comment-button-section">
          <button type="button" className="btn btn-info btn-sm">
            {articleLikes}
            &nbsp;
            <i className="far fa-thumbs-up" />
          </button>
          &nbsp;
          <button type="button" className="btn btn-success btn-sm">
            {articleComments}
            &nbsp;
            <i className="far fa-comment-alt" />
          </button>
          <div className="dropdown show dropleft float-right">
            <button className="dropdown-toggle btn btn-light btn-sm btn-more" type="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More...
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <button className="dropdown-item btn-link" type="button">
                <i className="fas fa-star fa-rated"  />
                <i className="fas fa-star fa-rated"  />
                <i className="fas fa-star fa-rated"  />
                <i className="fas fa-star-half-alt fa-rated" />
                <i className="far fa-star fa-rated"  />
              </button>
              <hr />
              <button className="dropdown-item more btn-link" type="button">
                <i className="fas fa-star"  />
                Favourite
              </button>
              <button className="dropdown-item more btn-link" type="button">
                <i className="far fa-bookmark"  />
                &nbsp;Bookmark
              </button>
              <hr />
              <button className="dropdown-item more btn-link" type="button" data-toggle="modal" data-target="#report">
                <i className="fas fa-exclamation-circle"  />
                &nbsp;Report
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 article-text">
          <img className="img img-responsive article-avatar" src={articleAvatar} alt=""  />
        </div>
        <div className="col-md-10 article-text">
          <a href="/userprofile">
            {authorName}
          </a>
          <a href={"/a/view_article/" + articleSlug}>
            <span className="text-fit">
              {articleTitle}
            </span>
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};

export const articleComponentPropTypes = {
  articleImage: PropTypes.string.isRequired,
  articleSlug: PropTypes.string.isRequired,
  articleLikes: PropTypes.number.isRequired,
  articleComments: PropTypes.number.isRequired,
  articleAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired
};

ArticleComponent.propTypes = articleComponentPropTypes;

export default ArticleComponent;
