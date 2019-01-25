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


export default IndexPage;
