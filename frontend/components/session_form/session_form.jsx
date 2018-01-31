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

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    let text = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
    let path = this.props.path === '/#/login'
    return (
      <div>
        <h1>{text}</h1>
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
        </form>
      </div>
    );
  }

}
