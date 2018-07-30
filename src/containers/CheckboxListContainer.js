'use strict';

import { connect } from 'react-redux';

import CheckboxList from '../components/CheckboxList';
import { addSpice, removeSpice, addVegetable, removeVegetable } from '../actions';

const mapStateToProps = (state, props) => {
  let s = Object.assign({}, props);
  if (props.title === 'Spices') {
    s.checked = state.ingredients.protein;
  } else {
    s.checked = state.portion;
  }
  return s;
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: (event) => {
      const id = parseInt(event.target.value);
      const isChecked = event.target.checked;
      if (props.title === 'Spices') {
        if (isChecked) {
          dispatch(addSpice(id));
        } else {
          dispatch(removeSpice(id));
        }
      } else {
        dispatch(addVegetable(id));
        if (isChecked) {
          dispatch(addVegetable(id));
        } else {
          dispatch(removeVegetable(id));
        }
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxList);