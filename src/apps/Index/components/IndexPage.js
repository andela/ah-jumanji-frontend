import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import LoginContainer from '../../Login/components/LoginContainer';
import MainPreloader from './MainPreloader';
import * as notificationActions from "../../Notifiications/actions/notificationActions";


class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    // start by fetching notifications and placing them in the local storage
    const {actions} = this.props;
    actions.FetchAllNotifications('unread');
    actions.FetchAllNotifications('read');
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({isLoading: false}), 1000);
  }

  render() {
    let {isLoading} = this.state;
    return (
      isLoading ? (
        <MainPreloader />) : (
        <div>
          <LoginContainer />
        </div>
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.Notifications
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(notificationActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
