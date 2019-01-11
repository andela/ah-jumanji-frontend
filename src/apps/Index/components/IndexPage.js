/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import LoginContainer from '../../Login/components/LoginContainer';
import MainPreloader from './MainPreloader';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({isLoading: false}), 1500);
  }

  render() {
    return (
      this.state.isLoading ? (
        <MainPreloader />) : (
          <div>
            <LoginContainer />
          </div>
      )

    );
  }
}

export default IndexPage;
