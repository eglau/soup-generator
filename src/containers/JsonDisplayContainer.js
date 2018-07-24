import { connect } from 'react-redux';

import JsonDisplay from '../components/JsonDisplay';

const mapStateToProps = (state, props) => {
  let output = {
    json: JSON.stringify(Object.assign({}, state))
  };
  return output;
}

export default connect(mapStateToProps)(JsonDisplay);