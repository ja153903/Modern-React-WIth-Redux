import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  // redux-promise allows us to just work with data
  // in our reducer

  // we're not mutating our state, we have to create a new instance of state
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]);
      // ...state means we can flatten the array with the other array
      // action.payload.data
      return [action.payload.data, ...state];
  }
  return state;
}
