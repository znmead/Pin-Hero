const addPinReducer = (state = [], action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'SET_PIN_TEAM':
            newState.pinTeam = action.payload;
        case 'SET_PIN_LEAGUE':
            newState.pinLeague = action.payload;
        case 'SET_PIN_YEAR':
            newState.pinYear = action.payload;
        case 'SET_PIN_URL':
            newState.pinUrl = action.payload;
        case 'SET_PIN_TRADEABLE':
            newState.pinTradeable = action.payload;
        case 'SET_PIN_USER_ID':
            newState.userID = action.payload;
        case 'RESET_ADD_PIN':
            return [];
        default:
            return state;
    };
};

export default addPinReducer;
