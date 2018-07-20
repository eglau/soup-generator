import ingredients from './ingredients';

const initialState = {
  spices: [],
  vegetables: [],
  protein: 0
};
const testState = {
  spices: [1, 2, 3],
  vegetables: [4, 5, 6],
  protein: 1
};

describe('ingredients reducer', () => {
  it('should handle initial state', () => {
    expect(ingredients(undefined, {})).toEqual(initialState);
  });

  describe('should handle ADD_SPICE action', () => {
    let initialState;
    const payload = {
      type: 'ADD_SPICE',
      spice: 4
    };

    beforeEach(() => {
      initialState = {
        spices: [],
        vegetables: [],
        protein: 0
      };
    });

    it('for initial state', () => {
      expect(ingredients(initialState, payload)).toEqual({
        spices: [4],
        vegetables: [],
        protein: 0
      });
    });
    it('when the target spice is not in the state', () => {
      expect(ingredients(testState, payload)).toEqual({
        spices: [1, 2, 3, 4],
        vegetables: [4, 5, 6],
        protein: 1
      });
    });
    it('when the target spice is already in the state', () => {
      expect(ingredients(testState, { type: 'ADD_SPICE', spice: 1 })).toEqual(testState);
    });
  });
});