'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import SoupGenerator from './components/SoupGenerator';
import rootReducer from './reducers';

import './css/style.scss';

const store = createStore(rootReducer);
ReactDOM.render((
  <Provider store={store}>
    <SoupGenerator />
  </Provider>
), document.getElementById('root'));