const soup = (state = '', action) => {
  switch (action.type) {
    case 'todo':
      return 'todo';
    default:
      return state;
  }
};

export default soup;