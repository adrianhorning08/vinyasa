import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => {
  return (
    <div>
      <h1>Welcome, {currentUser.username}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const sessionLinks = () => {
  return (
    <div>
      <Link to='/#/signup'>Sign Up</Link>
      <Link to='/#/login'>Login</Link>
    </div>
  );
};

export const Greeting = props => {
  console.log(props);
  if (props.currentUser) {
    return personalGreeting(props.currentUser, props.logout);
  } else {
    return sessionLinks();
  }
};
