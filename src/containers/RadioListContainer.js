'use strict';

import { connect } from 'react-redux';

import RadioList from '../components/RadioList';
import { setProtein, setPortionSize } from '../actions';

const mapStateToProps = (state, props) => {
  let s = Object.assign({}, props);
  if (props.title === 'Protein') {
    s.checked = state.ingredients.protein;
  } else {
    s.checked = state.portion;
  }
  return s;
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChange: (event) => {
      const id = parseInt(event.target.value);
      if (props.title === 'Protein') {
        dispatch(setProtein(id));
      } else {
        dispatch(setPortionSize(id));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioList);