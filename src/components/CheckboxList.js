'use strict';

import React from 'react';

const CheckboxList = (props) => {
  return (
    <div className="four wide column">
      <h2>{props.title}</h2>
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
};

export default CheckboxList;