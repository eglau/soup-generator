'use strict';

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
      if (!_.contains(newState.spices, action.id)) {
        newState.spices.push(action.id);
      }
      return newState;
    case 'ADD_VEGETABLE':
      if (!_.contains(newState.vegetables, action.id)) {
        newState.vegetables.push(action.id);
      }
      return newState;
    case 'SET_PROTEIN':
      newState.protein = action.id;
      return newState;
    default:
      return state;
  }
};

export default ingredients;