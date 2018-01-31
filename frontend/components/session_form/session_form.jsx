import React from 'react';
import { Link } from 'react-router-dom';

export class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error,i) => {
          return <li key={i}>{error}</li>;
        })}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.state = {username: '', password: ''};
  }

  render() {
    let text = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
    let newPath = this.props.formType === 'login' ? '/signup' : '/login';
    let textToNewPath = this.props.formType === 'login' ? 'Sign Up' : 'Log In';
    // Redirect the user to the /#/ route if they are logged in

    return (
      <div>

        <h1>{text}</h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              />
          </label>

          <label>Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              />
          </label>
          <button>Submit</button>
          <Link to={newPath}>{textToNewPath}</Link>
        </form>
      </div>
    );
  }

}
