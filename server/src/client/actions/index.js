import axios from 'axios';

const FETCH_USERS = 'FETCH_USERS';

const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};

export { FETCH_USERS, fetchUsers };
