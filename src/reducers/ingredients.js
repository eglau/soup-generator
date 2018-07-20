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
      return newState;
    case 'ADD_VEGETABLE':
      if (!_.contains(newState.vegetables, action.vegetable)) {
        newState.vegetables.push(action.vegetable);
      }
      return newState;
    case 'SET_PROTEIN':
      newState.protein = action.protein;
      return newState;
    default:
      return state;
  }
};

export default ingredients;