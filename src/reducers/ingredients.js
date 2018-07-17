const DEFAULT_STATE = {
  spices: [],
  vegetables: [],
  protein: 0
};

const _ = require('underscore');

const ingredients = (state = DEFAULT_STATE, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_SPICE':
      if (!_.contains(newState.spices, action.spice)) {
        newState.spices.push(action.spice);
      }
    case 'ADD_VEGETABLE':
    if (!_.contains(newState.vegetables, action.vegetable)) {
      newState.vegetables.push(action.vegetable);
    }
    case 'SET_PROTEIN':
      let newState = Object.assign({}, state);
      newState.protein = action.protein;
  }
  return newState;
};

export default ingredients;