import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LikesViewComponent from "../components/LikesViewComponent";
import {fetchLikers} from "../actions/likeActions";


class LikesViewContainer extends Component {
  componentDidMount = () => {
    const {fetchLikers} = this.props;
    const slug = "mr-python"; // Not to be hard coded
    fetchLikers(slug);
  };

  render() {
    const {reactions} = this.props;

    return (
      <div className="tab-pane fade show" id="likes" role="tabpanel" aria-labelledby="tab">
        <div className="col-md-12">
          <ul id="likes-list" className="list-group list-group-flush likers">
            {
              reactions ? reactions.map(rxn => (
                <LikesViewComponent key={rxn.id} reaction={rxn} />
              )) : <span />
            }
            <br />
          </ul>
        </div>
      </div>
    );
  }
}

LikesViewContainer.propTypes = {
  reactions: PropTypes.array.isRequired,
  fetchLikers: PropTypes.func.isRequired,
};

const mapStateToProps = ({LikeReducer}) => LikeReducer;

export default connect(mapStateToProps, {fetchLikers})(LikesViewContainer);
