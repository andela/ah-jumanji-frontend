import * as types from './likeActionTypes';
import * as actions from './likeActions';

const data = {};

describe('Like actions types', () => {
  it('should dispatch types LIKE_SUCCESS', () => {
    const expectedActions ={
      type: types.LIKE_SUCCESS,
      data
    };
    expect(actions.likeSuccess(data)).toEqual(expectedActions);
  });

  it('should dispatch types LIKE_FAIL', () => {
    const error = {};
    const expectedActions ={
      type: types.LIKE_FAIL,
      error
    };
    expect(actions.likeFail(error)).toEqual(expectedActions);
  });

  it('should dispatch types GET_LIKES', () => {
    const payload = {};
    const expectedActions ={
      type: types.GET_LIKES,
      payload
    };
    expect(actions.getLikes(payload)).toEqual(expectedActions);
  });

  it('should dispatch types GET_LIKES_FAIL', () => {
    const error = {};
    const expectedActions ={
      type: types.GET_LIKES_FAIL,
      error
    };
    expect(actions.getLikesFail(error)).toEqual(expectedActions);
  });

  it('should dispatch types FETCH_LIKERS_SUCCESS', () => {
    const payload = {};
    const expectedActions ={
      type: types.FETCH_LIKERS_SUCCESS,
      payload
    };
    expect(actions.fetchLikersSuccess(payload)).toEqual(expectedActions);
  });

  it('should dispatch types FETCH_LIKERS_FAIL', () => {
    const error = {};
    const expectedActions ={
      type: types.FETCH_LIKERS_FAIL,
      error
    };
    expect(actions.fetchLikersFail(error)).toEqual(expectedActions);
  });
});

describe('Like actions', () => {
  it('should add likes to the articles', () => {
    const data = {
      slug: 'mr-ruby',
    };
    expect(actions.addLikes(data).type).toEqual(actions.likeSuccess.type);
  });
});

