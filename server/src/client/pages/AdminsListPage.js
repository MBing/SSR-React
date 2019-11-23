import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import { requireAuth } from '../components/hocs/requireAuth';
import { RenderList } from './RenderList';

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  head() {
    return (
        <Helmet>
          <title>{`${this.props.admins.length} Admins Loaded`}</title>
          <meta property="og:title" content="Admins Page" />
        </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
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
    requireAuth(AdminsList)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
