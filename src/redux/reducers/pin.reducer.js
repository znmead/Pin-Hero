const pinReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PIN':
        return action.payload;
      case 'UNSET_PIN':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default pinReducer;