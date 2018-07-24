import * as actions from './index';

describe('addSpice action', () => {
  it('should create ADD_SPICE action', () => {
    expect(actions.addSpice(1)).toEqual({
      type: 'ADD_SPICE',
      id: 1
    });
  });
});

describe('addVegetable action', () => {
  it('should create ADD_VEGETABLE action', () => {
    expect(actions.addVegetable(2)).toEqual({
      type: 'ADD_VEGETABLE',
      id: 2
    })
  });
});

describe('setProtein action', () => {
  it('should create SET_PROTEIN action', () => {
    expect(actions.setProtein(3)).toEqual({
      type: 'SET_PROTEIN',
      id: 3
    })
  });
});

describe('setPortionSize action', () => {
  it('should create SET_PORTION_SIZE action', () => {
    expect(actions.setPortionSize(3)).toEqual({
      type: 'SET_PORTION_SIZE',
      size: 3
    })
  });
});