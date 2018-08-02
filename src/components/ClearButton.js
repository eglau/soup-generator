'use strict';

import React from 'react';

const ClearButton = (props) => {
  return (
    <div id="button-panel">
      <button onClick={props.onClick}>Clear Ingredients</button>
    </div>
  );
};

export default ClearButton;