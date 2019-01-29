import * as get_actions from './_get_actions';
import {GOT_ARTICLE, ERROR_GETTING_ARTICLE} from '../actionTypes';

it('return state data when article is fetched', () => {
    const passed_payload = {
        article: 'fetched article'
    };
    const returnedData = {
        "payload": {
            "read_article": passed_payload,
            "posting": false,
            "fetching": false
            },
        "type": GOT_ARTICLE};

    expect(get_actions.gotArticle(passed_payload)).toEqual(returnedData);
  });


it('return state data when article fetching is errored', () => {
    const passed_payload = "Cannot fetch";
    const returnedData = {
        "payload": "Cannot fetch",
        "type": ERROR_GETTING_ARTICLE
    };
    expect(get_actions.getError(passed_payload)).toEqual(returnedData);
  });

//Testing async tests
describe("Test for the fetch async function", ()=>{
    it("Should return a fetched success slug",() => {
        let fetchData = get_actions.getArticles('this-is-string-963376');
        fetchData().then(response => {
            expect(response.data.articles.slug).toEqual("string-e678-963376");
        });
    });
});
