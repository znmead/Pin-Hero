const pins = (state = [], action) => {
  switch (action.type) {
    case 'SET_PIN':
      return action.payload;
    case 'UNSET_PIN':
      return [];
    default:
      return state;
  }
};

// pin will be on the redux state at:
// state.pin
export default pins;