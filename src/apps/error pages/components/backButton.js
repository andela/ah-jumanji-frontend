import React from "react";
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

class BackButton extends React.Component {

  render() {
    const {history} = this.props;
    return (
      <button
        type="button"
        className="btn btn-outline-warning btn-lg icon-left"
        onClick={history.goBack}>
        Go Back
      </button>
    );
  }
}

BackButton.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(BackButton);
