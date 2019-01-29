import React, {Component} from 'react';

import SecondaryNav from './SecondaryNav';
import Articles from './Articles';

class DashboardContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <SecondaryNav />
        <div className="container">
          <h4 className="article-header">
            <i className="fas fa-align-right" />
            <span id="category">
              &nbsp;
              All Articles.
            </span>
          </h4>
          <Articles />
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardContainer;
