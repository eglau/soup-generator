'use strict';

import * as actions from './index';

describe('addSpice action', () => {
  it('should create ADD_SPICE action', () => {
    expect(actions.addSpice(1)).toEqual({
      type: 'ADD_SPICE',
      id: 1
    });
  });
});

describe('removeSpice action', () => {
  it('should create REMOVE_SPICE action', () => {
    expect(actions.removeSpice(1)).toEqual({
      type: 'REMOVE_SPICE',
      id: 1
    });
  });
});

describe('addVegetable action', () => {
  it('should create ADD_VEGETABLE action', () => {
    expect(actions.addVegetable(2)).toEqual({
      type: 'ADD_VEGETABLE',
      id: 2
    });
  });
});

describe('removeVegetable action', () => {
  it('should create REMOVE_VEGETABLE action', () => {
    expect(actions.removeVegetable(2)).toEqual({
      type: 'REMOVE_VEGETABLE',
      id: 2
    });
  });
});

describe('setProtein action', () => {
  it('should create SET_PROTEIN action', () => {
    expect(actions.setProtein(3)).toEqual({
      type: 'SET_PROTEIN',
      id: 3
    });
  });
});

describe('setPortionSize action', () => {
  it('should create SET_PORTION_SIZE action', () => {
    expect(actions.setPortionSize(3)).toEqual({
      type: 'SET_PORTION_SIZE',
      size: 3
    });
  });
});

describe('clearIngredients action', () => {
  it('should create CLEAR_INGREDIENTS action', () => {
    expect(actions.clearIngredients()).toEqual({
      type: 'CLEAR_INGREDIENTS'
    });
  });
});