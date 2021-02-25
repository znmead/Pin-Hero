import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// GET all pins to hockey_pins db
function* fetchPins(action) {
    try {
        if (action.payload) {
            console.log('shipping', action.payload)
            const pinResponse = yield axios.get(`/api/pin/${action.payload}`);
        }
        else {
            const pinResponse = yield axios.get('/api/pin');
        }
        yield put({ type: 'SET_PIN', payload: pinResponse.data});
    } catch (error) {
        console.log('Error getting pins', error);
    }
};

// POST new pin to hockey_pins db
function* addPin(action) {
    try {
        yield axios.post('/api/pin', action.payload);
        yield put({ type: 'FETCH_PIN' })
    } catch (error) {
        console.log('Error adding pin', error);
    }
};

// TODO: function* editPin(action)

// DELETE pin from hockey_pins db
function* deletePin(action) {
    try {
        yield axios.delete(`/api/pin/${action.payload}`);
        yield put({ type: 'FETCH_ITEM' });
    } catch (error) {
        console.log('Error deleting pin', error);
    }
};









function* pinSaga() {
    yield takeLatest('FETCH_PIN', fetchPins);
    yield takeLatest('ADD_PIN', addPin);
    yield takeLatest('DELETE_PIN', deletePin);
}

export default pinSaga;

