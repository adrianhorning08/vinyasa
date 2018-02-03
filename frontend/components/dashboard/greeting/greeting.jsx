import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => {
  return (
    <div className="topbar-right">
      <p>Welcome, {currentUser.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const sessionLinks = () => {
  return (
    <div className="header-links">
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export const Greeting = props => {
  if (props.currentUser) {
    return personalGreeting(props.currentUser, props.logout);
  } else {
    return sessionLinks();
  }
};
