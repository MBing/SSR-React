import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import { requireAuth } from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return (
      <ul>
        {this.props.admins.map(admin => {
          return <li key={admin.id}>{admin.name}</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h3>Protected List of Admins</h3>
        {this.renderAdmins()}
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => ({
  admins,
});

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
