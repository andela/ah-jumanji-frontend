import React from 'react';
import PropTypes from 'prop-types';


export default function NotificationTabContent(props) {
  const {content, id, onclick} = props;
  let button = null;
  if (id === 'unread') {
    button = (
      <button
        type="button" className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Mark all as read" onClick={onclick}>
        mark all
      </button>
    );
  }
  return (
    <div id={id} className="tab-pane fade in active">
      {button}
      {content}
    </div>
  );
}

NotificationTabContent.propTypes = {
  content: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onclick: PropTypes.func
};

NotificationTabContent.defaultProps = {
  onclick: function () {
  }
};
