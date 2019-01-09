import {
  facebook,
  google
} from '../actions/types';
import initialState from '../../../store/initialState';

export default function socialAuthFunc(state = initialState, action) {

  switch (action.type) {

    // sample state update function
    case facebook:
      {
        let fbState = {user: action.use};

        return fbState;
      }

    case google:
      {
        let gogState = {user: action.user};

        return gogState;
      }

    default:
      {
        return state;
      }
  }
}
