'use strict';

import ingredients from './ingredients';

describe('ingredients reducer', () => {
  it('should handle initial state', () => {
    expect(ingredients(undefined, {})).toEqual({
      spices: [],
      vegetables: [],
      protein: 1
    });
  });

  // Test spices
  describe('should handle ADD_SPICE action', () => {
    let testState;
    beforeEach(() => {
      testState = {
        spices: [1, 2, 3]
      };
    });

    it('when the target spice is not in the state', () => {
      expect(ingredients(testState, { type: 'ADD_SPICE', id: 4 }).spices).toEqual([1, 2, 3, 4]);
    });
    it('when the target spice is already in the state', () => {
      expect(ingredients(testState, { type: 'ADD_SPICE', id: 1 })).toEqual(testState);
    });
  });

  // Test vegetables
  describe('should handle ADD_VEGETABLE action', () => {
    let testState;
    beforeEach(() => {
      testState = {
        vegetables: [4, 5, 6]
      };
    });
    
    it('when the target vegetable is not in the state', () => {
      expect(ingredients(testState, { type: 'ADD_VEGETABLE', id: 3 }).vegetables).toEqual([4, 5, 6, 3]);
    });
    it('when the target vegetable is already in the state', () => {
      expect(ingredients(testState, { type: 'ADD_VEGETABLE', id: 4 })).toEqual(testState);
    });
  });

  // Test protein
  it('should handle SET_PROTEIN action', () => {
    let testState = { protein: 1 };
    let payload = { type: 'SET_PROTEIN', id: 2 };
    expect(ingredients(testState, payload).protein).toBe(2);
  });
});
