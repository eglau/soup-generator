'use strict';

import React from 'react';

import JsonDisplayContainer from '../containers/JsonDisplayContainer';
import CheckboxListContainer from '../containers/CheckboxListContainer';
import RadioListContainer from '../containers/RadioListContainer';
import ClearButtonContainer from '../containers/ClearButtonContainer';

import '../css/style.scss';

const SPICES = [
  { id: 1, name: 'Oregano' },
  { id: 2, name: 'Cinnamon' },
  { id: 3, name: 'Paprika' },
  { id: 4, name: 'Cumin' },
  { id: 5, name: 'Cardamom' }
];
const VEGETABLES = [
  { id: 1, name: 'Carrot' },
  { id: 2, name: 'Celery' },
  { id: 3, name: 'Onion' },
  { id: 4, name: 'Potato' },
  { id: 5, name: 'Tomato' }
];
const PROTEINS = [
  { id: 1, name: 'Tofu' },
  { id: 2, name: 'Chicken' },
  { id: 3, name: 'Beef' },
  { id: 4, name: 'Lamb' },
  { id: 5, name: 'Pork' }
];
const PORTIONS = [
  { id: 1, name: 'Small' },
  { id: 2, name: 'Medium' },
  { id: 3, name: 'Large' }
]

const SoupGenerator = () => {
  return (
    <div id="soupgenerator">
      <header>
        <h1>Soup Generator</h1>
      </header>
      <div id="ingredients-selector" className="ui grid padded">
        <CheckboxListContainer title='Spices' items={SPICES} inputName='spice' />
        <CheckboxListContainer title='Vegetables' items={VEGETABLES} inputName='vegetable' />
        <RadioListContainer title='Protein' items={PROTEINS} inputName="protein" checked={1} />
        <RadioListContainer title='Portion Size' items={PORTIONS} inputName="portion" checked={2} />
      </div>
      <ClearButtonContainer />
      <JsonDisplayContainer />
      <footer>
        <p>Made with love by eglau</p>
      </footer>
    </div>
  );
};

export default SoupGenerator;