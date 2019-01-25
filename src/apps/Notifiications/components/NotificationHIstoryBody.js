import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../common/components/HeaderComponent";
import PageBackground from "../../common/components/PageBackground";
import NavLink from "./navLink";
import NavTab from "./tabComponent";


export default function NotificationsBody(props) {
  const {unread_content, read_content} = props;
  return (
    <div className="container">
      <PageBackground />
      <Header label="Notifications" />
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <NavLink url="#unread-section" label="Unread Notifications" id="nav-unread" classname="nav-item nav-link active" />
          <NavLink url="#read-section" label="Read Notifications" id="nav-read" />
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <NavTab label="unread_section" id="unread-section" content={unread_content} />
        <NavTab label="read_section" id="read-section" content={read_content} />
      </div>
    </div>
  );
}

NotificationsBody.propTypes = {
  unread_content: PropTypes.object.isRequired,
  read_content: PropTypes.object.isRequired
};
