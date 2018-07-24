import React from 'react';

import '../css/json.scss';

const JsonDisplay = (props) => {
  return (
    <div id="json-output">{props.json}</div>
  );
}

export default JsonDisplay;