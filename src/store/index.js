import { createStore, combineReducers } from 'redux';
import entries from '../reducers/entries';

const reducer = combineReducers({
  entries,
});

export const store = createStore(reducer);
