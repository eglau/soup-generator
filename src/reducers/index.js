'use strict';

import { combineReducers } from 'redux';

import ingredients from './ingredients';
import portion from './portion';

export default combineReducers({
  ingredients,
  portion
});