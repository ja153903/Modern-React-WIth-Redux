import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state={}, action) {
  switch (action.type) {
    case DELETE_POST:
      // Look at the state object and if it has a key of post id
      // then omit it and return a new object with a new id
      // this returns a new state object
      return _.omit(state, action.payload);
    case FETCH_POST:
      // const post = action.payload.data; // this contains the data
      // const newState = { ...state};
      // newState[post.id] = post;
      // return newState;
      // square braces => key interpolation
      // ...state makes sure that we dont rewrite the list of posts
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
