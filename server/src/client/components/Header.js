import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderContainer = ({ auth }) => {
  // This is a call for the browser, not only inside the app, so proper use of a.href iso Link
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Home
        </Link>
        <ul className="right">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });
const Header = connect(mapStateToProps)(HeaderContainer);

export { Header };
