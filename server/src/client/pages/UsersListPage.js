import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { RenderList } from './RenderList';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users Page" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h3>Users List</h3>
        {this.props.users && (
          <RenderList list={this.props.users} type="Users" />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData: ({ dispatch }) => dispatch(fetchUsers()),
};
