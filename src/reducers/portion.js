// Portion sizing: 1 = small, 2 = medium, 3 = large
const portion = (state = 2, action) => {
  switch (action.type) {
    case 'SET_PORTION_SIZE':
      return action.size;
    default:
      return state;
  }
};

export default portion;