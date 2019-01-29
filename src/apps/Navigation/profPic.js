import React from 'react';
import config from '../../config/config';


class ProfPic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3600);
  }

  render() {
    let {isLoading} = this.state;
    let avatar = config.avatarImage.avatarUrl;
    return (
      <button className="nav-link dropdown-toggle btn-link" type="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src={isLoading ? avatar : localStorage.profPic} alt="follower avatar" className="followers-avatar navbar-avatar rounded-circle" />
      </button>
    );
  }
}

export default ProfPic;
