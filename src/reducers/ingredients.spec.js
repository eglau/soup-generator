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
  describe('should handle REMOVE_SPICE action', () => {
    let testState;
    beforeEach(() => {
      testState = {
        spices: [1, 2, 3]
      };
    });

    it('when the target spice is not in the state', () => {
      expect(ingredients(testState, { type: 'REMOVE_SPICE', id: 4 }).spices).toEqual([1, 2, 3]);
    });
    it('when the target spice is already in the state', () => {
      expect(ingredients(testState, { type: 'REMOVE_SPICE', id: 1 }).spices).toEqual([2, 3]);
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
  describe('should handle REMOVE_VEGETABLE action', () => {
    let testState;
    beforeEach(() => {
      testState = {
        vegetables: [4, 5, 6]
      };
    });
    
    it('when the target vegetable is not in the state', () => {
      expect(ingredients(testState, { type: 'REMOVE_VEGETABLE', id: 3 }).vegetables).toEqual([4, 5, 6]);
    });
    it('when the target vegetable is already in the state', () => {
      expect(ingredients(testState, { type: 'REMOVE_VEGETABLE', id: 5 }).vegetables).toEqual([4, 6]);
    });
  });

  // Test protein
  it('should handle SET_PROTEIN action', () => {
    let testState = { protein: 1 };
    let payload = { type: 'SET_PROTEIN', id: 2 };
    expect(ingredients(testState, payload).protein).toBe(2);
  });

  it('should handle CLEAR_INGREDIENTS action', () => {
    let testState = { spices: [1, 2], vegetables: [3, 4], protein: 5 };
    let payload = { type: 'CLEAR_INGREDIENTS' };
    expect(ingredients(testState, payload)).toEqual({
      spices: [],
      vegetables: [],
      protein: 1
    });
  });
});
