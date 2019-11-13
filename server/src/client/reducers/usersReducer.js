import { FETCH_USERS } from '../actions';

const usersReducer = (state = [], action) => {
  switch (action.types) {
    case FETCH_USERS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export { usersReducer };
