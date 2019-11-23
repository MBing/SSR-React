import { FETCH_CURRENT_USER } from '../actions';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export { authReducer };
