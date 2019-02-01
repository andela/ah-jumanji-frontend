import React from "react";
import PropTypes from 'prop-types';
import PageBackground from "../../common/components/PageBackground";
import BackButton from "./backButton";


export default function ErrorPage(props) {
  const {header, message, button} = props;
  return (
    <React.Fragment>
      <PageBackground />
      <div className="container h-100 d-flex">
        <div className="jumbotron-fluid register-redirect-modal my-auto position-relative">
          <em><h1>{header}</h1></em>
          <strong><h5>{message}</h5></strong>
          {button}
        </div>
      </div>
    </React.Fragment>
  );
}

ErrorPage.propTypes = {
  header: PropTypes.string,
  message: PropTypes.string,
  button: PropTypes.element
};

ErrorPage.defaultProps = {
  header: "404",
  message: "Looks Like the page you are looking for was not found",
  button: <BackButton />
};
