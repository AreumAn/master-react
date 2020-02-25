import { combineReducers } from 'redux';
import counter from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

export function* rootSage() {
    yield all([sampleSaga()]);
}

export default rootReducer;
