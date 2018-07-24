'use strict';

import React from 'react';

import JsonDisplayContainer from '../containers/JsonDisplayContainer';

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
      <div id="ingredients-selector" className="ui grid">
        <CheckboxList title='Spices' items={SPICES} inputName='spice' />
        <CheckboxList title='Vegetables' items={VEGETABLES} inputName='vegetable' />
        <RadioList title='Protein' items={PROTEINS} inputName="protein" />
        <RadioList title='Portion Size' items={PORTIONS} inputName="portion" />
      </div>
      <JsonDisplayContainer />
    </div>
  );
};

const CheckboxList = (props) => {
  return (
    <div className="four wide column">
      <h2>{props.title}</h2>
      {
        props.items.map(item => {
          let elemID = `${props.inputName}-${item.id}`;
          return (
            <div key={elemID}>
              <input id={elemID} type="checkbox" name={props.inputName} value={item.id} />
              <label htmlFor={elemID}>{item.name}</label>
            </div>
          )
        })
      }
    </div>
  );
}

const RadioList = (props) => {
  return (
    <div className="four wide column">
      <h2>{props.title}</h2>
      {
        props.items.map((item, index) => {
          const elemID = `${props.inputName}-${item.id}`;
          return (
            <div key={elemID}>
              <input id={elemID} type="radio" name={props.inputName} value={item.id} checked={index === 0}/>
              <label htmlFor={elemID}>{item.name}</label>
            </div>
          )
        })
      }
    </div>
  );
}

export default SoupGenerator;