const FETCH_USERS = 'FETCH_USERS';
const fetchUsers = () => async (dispatch, getState, api) => {
  // api is only good when using for our own api, no third party api will work
  // then import axios or so to handle that properly.
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export { FETCH_USERS, fetchUsers };
