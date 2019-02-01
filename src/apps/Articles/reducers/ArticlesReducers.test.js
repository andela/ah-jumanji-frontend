import articlesReducer from './ArticlesReducer';
import {
  POSTING_ARTICLE,
  DELETING_ARTICLE,
  POSTED_ARTICLE,
  GOT_ARTICLE,
  ERROR_GETTING_ARTICLE,
  UPDATING_ARTICLE,
  UPDATED_ARTICLE,
  UPDATING_CURRENT,
  UPDATED_ERROR,
  ERROR_DELETING_ARTICLE,
  DELETED_ARTICLE
} from '../actions/actionTypes';

it('retuns empty state on default', () => {
  //Test default
  let state = {};

  let passed_data = {
    type: "NO TYPE",
  };

  let receiver_data = {};
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: 'posting',
    article: ''
  };
  let passed_data = {
    type: POSTING_ARTICLE,
    payload: {
      article: 'this is an article',
      method: "posted"
    }
  };

  let receiver_data = {
    "method": "posted",
    "article": "this is an article"
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: 'posting',
    article: '123'
  };
  let passed_data = {
    type: POSTED_ARTICLE,
    payload: {
      article: 'this is a posted article',
      method: "posted"
    }
  };

  let receiver_data = {
    "method": "posted",
    "article": "this is a posted article"
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});

it('adds value in state with values', () => {
  let state = {
    method: '',
    article: ''
  };
  let passed_data = {
    type: GOT_ARTICLE,
    payload: {
      article: 'this is a fetched article',
      method: "got"
    }
  };

  let receiver_data = {
    "method": "got",
    "article": "this is a fetched article"
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: '',
    article: ''
  };
  let passed_data = {
    type: ERROR_GETTING_ARTICLE,
    payload: {
      error: 'error here'
    }
  };

  let receiver_data = {
    "method": "",
    "article": "",
    "error": "error here"
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: '',
    article: 'none'
  };
  let passed_data = {
    type: UPDATING_ARTICLE,
    payload: {
      article: 'this is an updated article',
      method: "puting"
    }
  };

  let receiver_data = {
    "method": "puting",
    "article": "this is an updated article"
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: '',
    article: 'none'
  };
  let passed_data = {
    type: UPDATED_ARTICLE,
    payload: {
      article: 'this is a new updated article',
      method: "updated"
    }
  };

  let receiver_data = {
    "method": "updated",
    "article": "this is a new updated article"
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: '',
    article: 'none'
  };
  let passed_data = {
    type: UPDATING_CURRENT,
    payload: {
      article: 'this is a current update article',
      method: "updated"
    }
  };

  let receiver_data = {
    "method": "updated",
    "article": "this is a current update article"
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: '',
    article: 'this is a current update article'
  };
  let passed_data = {
    type: UPDATED_ERROR,
    payload: {
      method: "update",
      error: 'cant update article'
    }
  };

  let receiver_data = {
    "method": "update",
    "article": "this is a current update article",
    "error": 'cant update article'
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: 'posted',
    article: 'this is a article'
  };
  let passed_data = {
    type: ERROR_DELETING_ARTICLE,
    payload: {
      method: "delete",
      error: 'cant delete article'
    }
  };

  let receiver_data = {
    "method": "delete",
    "article": "this is a article",
    "error": 'cant delete article'
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: 'posted',
    article: 'this is a article'
  };
  let passed_data = {
    type: DELETING_ARTICLE,
    payload: {
      method: "deleting"
    }
  };

  let receiver_data = {
    "method": "deleting",
    "article": "this is a article"
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: 'deleting',
    article: 'this is a article'
  };
  let passed_data = {
    type: DELETED_ARTICLE,
    payload: {
      method: "deleted",
      article: ''
    }
  };

  let receiver_data = {
    "method": "deleted",
    "article": ""
  };
  //Should add data in payload  to existing data
  expect(articlesReducer(state, passed_data)).toEqual(receiver_data);
});
