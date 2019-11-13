import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
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

const UsersList = connect(mapStateToProps, { fetchUsers })(UsersListContainer);
export { UsersList };
