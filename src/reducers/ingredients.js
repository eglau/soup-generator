'use strict';

const _ = require('underscore');

const getDefaultState = () => {
  return {
    spices: [],
    vegetables: [],
    protein: 1
  };
};

const copyState = (state) => {
  let newState = {};
  Object.keys(state).map(key => {
    let value = state[key];
    if (Array.isArray(value)) {
      newState[key] = value.slice();
    } else {
      newState[key] = value;
    }
  });
  return newState;
}

const ingredients = (state = getDefaultState(), action) => {
  let newState = copyState(state);
  switch (action.type) {
    case 'ADD_SPICE':
      if (!_.contains(newState.spices, action.id)) {
        newState.spices.push(action.id);
      }
      return newState;
    case 'REMOVE_SPICE':
      newState.spices = newState.spices.filter(spice => {
        return (spice !== action.id);
      });
      return newState;
    case 'ADD_VEGETABLE':
      if (!_.contains(newState.vegetables, action.id)) {
        newState.vegetables.push(action.id);
      }
      return newState;
    case 'REMOVE_VEGETABLE':
      newState.vegetables = newState.vegetables.filter(vegetable => {
        return (vegetable !== action.id);
      });
      return newState;
    case 'SET_PROTEIN':
      newState.protein = action.id;
      return newState;
    case 'CLEAR_INGREDIENTS':
      return getDefaultState();
    default:
      return state;
  }
};

export default ingredients;