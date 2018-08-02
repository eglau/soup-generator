'use strict';

import React from 'react';
import { Button } from 'semantic-ui-react';

const ClearButton = (props) => {
  return (
    <div id="button-panel">
      <Button onClick={props.onClick} content='Clear Ingredients' />
    </div>
  );
};

export default ClearButton;