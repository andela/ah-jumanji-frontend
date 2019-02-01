import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import SecondaryNav from './SecondaryNav';
import Articles from './Articles';
import Pagination from "../../Pagination/components/Pagination";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  onPageChanged = data => {
    const { currentPage } = data;
    this.setState({ currentPage });
    };

  render() {
    const { currentPage } = this.state;
    const { articleCount } = this.props;
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
          <Articles currentPage={currentPage} />
          <Pagination
            totalRecords={24}
            pageLimit={12}
            pageNeighbours={0}
            onPageChanged={this.onPageChanged}
        />
        </div>
      </React.Fragment>
    );
  }
}

DashboardContainer.propTypes = {
  articleCount: PropTypes.number.isRequired
};

const mapStateToProps = ({ Dashboard }) => Dashboard;

export default connect(mapStateToProps)(DashboardContainer);
