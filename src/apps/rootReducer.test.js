import rootReducer from './rootReducer';

it("Checks that root reducer is not null",() =>{
    expect(rootReducer).not.toEqual(null);
});