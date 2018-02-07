import Modal from 'react-modal';
import React from 'react';

export class NewProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      team_id: props.currentTeam.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field) {
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
    this.props.createProject(this.state)
    .then(() => this.props.closeModal())
    .then(() => this.props.history.push(`/dashboard/teams/${this.state.team_id}`));
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="modal-form">
        <header className="modal-form-header">
          New Project
          <svg onClick={this.props.closeModal}
            className="XIcon CloseButton-xIcon"
            viewBox="0 0 32 32"
            >
            <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828">
            </polygon>
          </svg>
        </header>
        {this.renderErrors()}
        <label>Title
          <br/>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateField('title')}
            >
          </input>
        </label>
        <br/>
        <button>Create New Project</button>
      </form>
    );
  }
}
