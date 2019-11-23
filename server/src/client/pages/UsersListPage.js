import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    if (this.props.users.length === 0) {
      return null;
    }
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h1>Users List</h1>
        {this.renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const UsersListPage = connect(mapStateToProps, { fetchUsers })(UsersList);
export default {
  component: UsersListPage,
  loadData: ({ dispatch }) => dispatch(fetchUsers()),
};
