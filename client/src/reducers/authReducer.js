import { FETCH_USER } from "../actions/types";

//three possible states null meaning we don't know a user object for logged in and false for logged out
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
