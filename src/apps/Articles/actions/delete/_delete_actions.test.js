import * as delete_actions from './_delete_actions';
import {DELETING_ARTICLE, ERROR_DELETING_ARTICLE, DELETED_ARTICLE} from '../actionTypes';


it('return state data when article is being deleted', () => {
    const passed_payload = {
        article: 'deleting article'
    };
    const returnedData = {
        "payload": {
            "deleted": {"article": "deleting article"},
            "deleting": true
            },
        "type": DELETING_ARTICLE};
    expect(delete_actions.deletingArticle(passed_payload)).toEqual(returnedData);
  });

it('return state data when article is deleted', () => {
    const passed_payload = {
        article: 'deleted article'
    };
    const returnedData = {
        "payload": {
            "deleted": {"article": "deleted article"},
            "posting": false,
            "fetching": false
            },
        "type": DELETED_ARTICLE};
    expect(delete_actions.deletedArticle(passed_payload)).toEqual(returnedData);
  });

it('return state data when article delete is errored', () => {
    const passed_payload = "Cannot delete";
    const returnedData = {
        "payload": "Cannot delete",
        "type": ERROR_DELETING_ARTICLE
    };
    expect(delete_actions.deleteError(passed_payload)).toEqual(returnedData);
  });

  //Testing async tests
  describe("Test for the delete async function", ()=>{
      it("Should return a fetched success slug",() => {
          let deleteData = delete_actions.deleteArticle('this-is-string-963376');
          deleteData().then(response => {
              expect(response.data.articles.slug).toEqual("string-e678-963376");
          });
      });
  });
