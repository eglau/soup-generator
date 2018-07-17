import * as actions from './index';

describe('addSpice action', () => {
  it('should create ADD_SPICE action', () => {
    expect(actions.addSpice('oregano')).toEqual({
      type: 'ADD_SPICE',
      spice: 'oregano'
    });
  });
});

describe('addVegetable action', () => {
  it('should create ADD_VEGETABLE action', () => {
    expect(actions.addVegetable('carrot')).toEqual({
      type: 'ADD_VEGETABLE',
      vegetable: 'carrot'
    })
  });
});

describe('setProtein action', () => {
  it('should create SET_PROTEIN action', () => {
    expect(actions.setProtein('chicken')).toEqual({
      type: 'SET_PROTEIN',
      protein: 'chicken'
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