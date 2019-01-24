import React from 'react';
import PropTypes from 'prop-types';
import Header from "./NotificationHistoryComponent";


export default function NotificationsBody(props) {
  const {content} = props;
  return (
    <div className="container">
      <Header label="Notifications" />
      <div className="col-md-12">
        <ul className="list-group list-group-flush">
          {content}
        </ul>
      </div>
    </div>
  );
}

NotificationsBody.propTypes = {
  content: PropTypes.object.isRequired
};
