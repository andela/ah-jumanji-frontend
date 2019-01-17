import createStore from './storeConfig';


describe("Test store creation", () => {
  it('should be an instance of store', function () {
    let store = createStore();
    expect(store.getState()).toBeDefined();
  });
});
