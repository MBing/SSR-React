import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import { requireAuth } from '../components/hocs/requireAuth';
import { RenderList } from './RenderList';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    return (
      <div>
        <h3>Protected List of Admins</h3>
        {this.props.admins && (
          <RenderList list={this.props.admins} type="Admins" />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => ({ admins });

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
