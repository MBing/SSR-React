import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderContainer = ({ auth }) => {
  console.log('auth', auth);
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });
const Header = connect(mapStateToProps)(HeaderContainer);

export { Header };
