const FETCH_USERS = 'FETCH_USERS';
const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
const FETCH_ADMINS = 'FETCH_ADMINS';

const fetchUsers = () => async (dispatch, getState, api) => {
  // api is only good when using for our own api, no third party api will work
  // then import axios or so to handle that properly.
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};

const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data,
  });
};

const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res.data,
  });
};

export {
  FETCH_ADMINS,
  FETCH_USERS,
  FETCH_CURRENT_USER,
  fetchUsers,
  fetchCurrentUser,
  fetchAdmins,
};
