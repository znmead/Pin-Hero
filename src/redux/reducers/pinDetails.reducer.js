const pinDetailsReducer = (state = {}, action) => {
    // manages which movie we want to load into the details page
    if (action.type === 'SET_PIN_DETAILS') {
        // action.payload should be the movie
        // to be shown on the details page
        return { ...action.payload }
    } else if (action.type === 'CLEAR_MOVIE_DETAILS') {
        return {} // clears state back to empty object
    }
    return state;
}

export default pinDetailsReducer;
