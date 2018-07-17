import ingredients from './ingredients';

const initialState = {
  spices: [],
  vegetables: [],
  protein: 0
};

describe('ingredients reducer', () => {
  it('should handle initial state', () => {
    expect(ingredients(undefined, {})).toEqual(initialState);
  });

  describe('should handle ADD_SPICE action', () => {
    const payload = {
      type: 'ADD_SPICE',
      spice: 4
    };
    it('for initial state', () => {
      expect(ingredients(initialState), payload).toEqual(true); //todo
    });
  });
});