const addSpice = (spice) => ({
  type: 'ADD_SPICE',
  spice
});

const addVegetable = (vegetable) => ({
  type: 'ADD_VEGETABLE',
  vegetable
});

const setProtein = (protein) => ({
  type: 'SET_PROTEIN',
  protein
});

const setPortionSize = (size) => ({
  type: 'SET_PORTION_SIZE',
  size
});


export {
  addSpice,
  addVegetable,
  setProtein,
  setPortionSize
}