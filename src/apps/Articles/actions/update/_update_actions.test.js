import * as update_actions from './_update_actions';
import {
  UPDATING_ARTICLE,
  UPDATED_ARTICLE,
  UPDATED_ERROR,
  UPDATING_CURRENT
} from '../actionTypes';


it('return state data when article is being updated', () => {

  const data = {
    article: 'updating article'
  };
  const returnedData = {
    type: UPDATING_ARTICLE,
    payload: {
      data,
      updating: true,
      fetching: false
    }
  };

  expect(update_actions.updatingArticle(data)).toEqual(returnedData);
});


it('return state data when article is posted', () => {
  const data = {
    article: 'updated article'
  };
  const returnedData = {
    type: UPDATED_ARTICLE,
    payload: {
      data,
      posting: false,
      fetching: false
    }
  };

  expect(update_actions.updatedArticle(data)).toEqual(returnedData);
});


it('return state data when article updating is errored', () => {
  const passed_payload = "Cannot update";
  const returnedData = {
    "payload": "Cannot update",
    "type": UPDATED_ERROR
  };
  expect(update_actions.updateError(passed_payload)).toEqual(returnedData);
});


it('return state data when article updating is continuous', () => {
  const new_article = "This is an article";
  const returnedData = {
    payload: {
      read_article: {
        body: new_article
      },
      updating: true
    },
    "type": UPDATING_CURRENT
  };

  expect(update_actions.updateRealtime(new_article)).toEqual(returnedData);
});

//Testing async tests
describe("Test for the updating async function", ()=>{
  it("Should return an update success slug",() => {
      let postData = update_actions.updateArticle("<p>This is the article body</p>");
      postData().then(response => {
          expect(response.data.articles.slug).toEqual("string-e678-963376");
      });
  });

});
