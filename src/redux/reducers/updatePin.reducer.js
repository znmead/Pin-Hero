const updatePinReducer = (state = { tradeable:'' }, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'UPDATE_PIN_TRADEABLE':
            newState.pinTradeable = action.payload;
        case 'RESET_UPDATE_PIN_TRADEABLE':
            return { tradeable:'' };
        default:
            return state;
    };
};

export default updatePinReducer;