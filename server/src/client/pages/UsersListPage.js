import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    console.log(this.props.users);
    return (
      <ul>
        this.props.users.map(user => (<li key={user.id}>{user.name}</li>))
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Users List</h1>
        {this.renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const loadData = store => {
  return store.dispatch(fetchUsers());
};

const UsersListPage = connect(mapStateToProps, { fetchUsers })(
  UsersList
);
export default { component: UsersListPage, loadData };
