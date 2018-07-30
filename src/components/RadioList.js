'use strict';

import React from 'react';

const RadioList = (props) => {
  return (
    <div className="four wide column">
      <h2>{props.title}</h2>
      {
        props.items.map(item => {
          const elemID = `${props.inputName}-${item.id}`;
          const checked = (item.id === props.checked);
          return (
            <div key={elemID}>
              <input id={elemID} type="radio" name={props.inputName} value={item.id} onChange={props.onChange} checked={checked}/>
              <label htmlFor={elemID}>{item.name}</label>
            </div>
          )
        })
      }
    </div>
  );
}

export default RadioList;