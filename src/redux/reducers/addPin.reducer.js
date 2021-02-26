const addPinReducer = (state = { team: '', league: '', year:'', image_url:'', tradeable:'', user_id:'' }, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'SET_PIN_TEAM':
            newState.pinTeam = action.payload;
            return newState;
        case 'SET_PIN_LEAGUE':
            newState.pinLeague = action.payload;
            return newState;
        case 'SET_PIN_YEAR':
            newState.pinYear = action.payload;
        case 'SET_PIN_URL':
            newState.pinUrl = action.payload;
        case 'SET_PIN_TRADEABLE':
            newState.pinTradeable = action.payload;
        case 'SET_PIN_USERID': 
            newState.userID = action.payload;
        case 'RESET_ADD_PIN':
            return {team: '', league: '', year:'', image_url:'', tradeable:'', user_id:'' };
        default:
            return state;
    };
};

export default addPinReducer;