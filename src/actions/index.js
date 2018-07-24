'use strict';

const addSpice = id => ({
  type: 'ADD_SPICE',
  id
});

const addVegetable = id => ({
  type: 'ADD_VEGETABLE',
  id
});

const setProtein = id => ({
  type: 'SET_PROTEIN',
  id
});

const setPortionSize = size => ({
  type: 'SET_PORTION_SIZE',
  size
});


export {
  addSpice,
  addVegetable,
  setProtein,
  setPortionSize
}