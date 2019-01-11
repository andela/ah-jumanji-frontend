import React from 'react';
import PropTypes from 'prop-types';
import CodeCollectionForm from "./collectResetURLForm";


function ResetCode(props) {
  const {match} = props;
  return (
    <div className="row login-container">
      <div className="col-md-6 offset-md-3">
        <div className="bg-circle-1 bg-circle" />
        <div className="bg-circle-2 bg-circle" />
        <div className="bg-circle-3 bg-circle" />
        <CodeCollectionForm reset_code={match.params.reset_code} />
      </div>
    </div>
  );
}

ResetCode.propTypes = {
  match: PropTypes.object.isRequired
};

export default ResetCode;
