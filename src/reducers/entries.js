import { UPDATE_ENTRIES } from '../actions/entries';

export default function reducer(state = [], action) {
  switch (action.type) {
    case UPDATE_ENTRIES: {
      return action.entries;
    }
    default:
      return state;
  }
}
