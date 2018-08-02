'use strict';

import { connect } from 'react-redux';

import ClearButton from '../components/ClearButton';
import { clearIngredients } from '../actions';

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      document.getElementsByName('spice').forEach(elem => {
        elem.checked = false;
      });
      document.getElementsByName('vegetable').forEach(elem => {
        elem.checked = false;
      });
      document.getElementById('protein-1').checked = true;
      dispatch(clearIngredients());
    }
  }
}

export default connect(null, mapDispatchToProps)(ClearButton);