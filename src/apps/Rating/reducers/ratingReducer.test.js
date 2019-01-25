
import ratingReducer from './ratingReducer';
import * as types from '../actions/actionTypes';

describe('rating reducer', () => {

  it('should return the initial state', () => {
    expect(
     ratingReducer(undefined, {
        averageRating: {},
        newRating: {}
    })).toEqual({
        averageRating: {},
        newRating: {}
    });
  });

  it('should handle AddRatingSucess', () => {
    const action = {
      type: types.ADD_RATING_SUCCESS,
      rating: {
          "rating": 5
      }
    };

    const expectedState = {
        averageRating: {},
        newRating: {
            "rating": 5
        }
    };

    expect( ratingReducer({
        averageRating: {},
        newRating: {}
    }, action )).toEqual(expectedState );
  });

  it('should handle addRatngFailed', () => {
    const action = {
      type: types.ADD_RATING_FAILED,
      rating_message: {
          "message": "you cannot rate your own article"
      }

    };
    const expectedState = {
        averageRating: {},
        newRating: {
            "message": "you cannot rate your own article"
        }
    };
    expect(ratingReducer({
        averageRating: {},
        newRating: {}
    }, action)).toEqual(expectedState);

  });

  it('should handle fetchAverageRating', () => {
    const action = {
        type: types.FETCH_AVERAGE_RATING,
        average_rating: {
            "rating": 4.5
        }
    };
    const expectedState = {
        averageRating: {
            "rating": 4.5
        },
        newRating: {}
    };
    expect(ratingReducer({
        averageRating: {},
        newRating: {}
    }, action)).toEqual(expectedState);
  });

});