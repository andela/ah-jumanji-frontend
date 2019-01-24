import React, { Component } from 'react';
import PropTypes from 'prop-types';

import defaultUserIcon from '../../../assets/img/default-avatar.jpg';
import articlePlaceholder from '../../../assets/img/placeholder.png';
import ArticleComponent from './ArticleComponent';

class ArticlesData extends Component {
  data = () => {
    const { articles } = this.props;

    if (articles[0] !== undefined) {
      const f = articles;
      const r = [];
      let articleImg = '';
      for (const i in f) {
        if (f[i].body.indexOf('src') > -1) {
          const imageSplit = f[i].body.substring(f[i].body.indexOf('src=') + 1);
          articleImg = imageSplit.split(/"/)[1];
        } else {
          articleImg = articlePlaceholder;
        }

        const t = (
          <ArticleComponent
            key={i}
            articleImage={articleImg}
            articleSlug={f[i].slug}
            articleLikes={f[i].likes}
            articleComments={f[i].comments}
            articleAvatar={f[i].author.profile_photo !== '' ? f[i].author.profile_photo : defaultUserIcon}
            authorName={f[i].author.user}
            articleTitle={f[i].title}
          />
        );
        r.push(t);
      }
      return (r);
    }
  }

  render() {
    return (
      <div className="grid" id="grid">
        <div className="grid-sizer" />
        {this.data()}
      </div>
    );
  }
}

ArticlesData.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlesData;
