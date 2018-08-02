'use strict';

import React from 'react';
import { Button } from 'semantic-ui-react';

const CheckboxList = (props) => {
  let list;
  if (props.items.length > 10) {
    list = DoubleColumnCheckBoxList(props);
  } else {
    list = SingleColumnCheckBoxList(props);
  }
  return (
    <div className="ui four wide column itemList">
      <h2 className="center itemListHeader">{props.title}</h2>
      { list }
    </div>
  );
}

const SingleColumnCheckBoxList = (props) => {
  return (
    <div className="ingredientList">
      {
        props.items.map(item => {
          const elemID = `${props.inputName}-${item.id}`;
          return (
            <div key={elemID}>
              <input id={elemID} type="checkbox" name={props.inputName} value={item.id} onClick={props.onClick} />
              <label htmlFor={elemID}>{item.name}</label>
            </div>
          )
        })
      }
    </div>
  );
}

const DoubleColumnCheckBoxList = (props) => {
  const half = Math.floor(props.items.length / 2);

  const firstHalf = props.items.slice(0, half);
  const secondHalf = props.items.slice(half);
  if (firstHalf.length < secondHalf.length) {
    firstHalf.push(secondHalf.shift());
  }

  return (
    <div className="ui two column grid stackable ingredientList">
      <div className="column">
        {
          firstHalf.map(item => {
            const elemID = `${props.inputName}-${item.id}`;
            return (
              <div key={elemID}>
                <input id={elemID} type="checkbox" name={props.inputName} value={item.id} onClick={props.onClick} />
                <label htmlFor={elemID}>{item.name}</label>
              </div>
            )
          })
        }
      </div>
      <div className="column">
        {
          secondHalf.map(item => {
            const elemID = `${props.inputName}-${item.id}`;
            return (
              <div key={elemID}>
                <input id={elemID} type="checkbox" name={props.inputName} value={item.id} onClick={props.onClick} />
                <label htmlFor={elemID}>{item.name}</label>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default CheckboxList;