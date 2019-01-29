import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static childContextTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    const { location } = this.props;

    return (<div>{location.pathname}</div>);
  }
}

ShowTheLocation.propTypes = {
  location: PropTypes.object.isRequired
};
// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export default withRouter(ShowTheLocation);
