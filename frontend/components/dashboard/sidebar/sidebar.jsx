import React from 'react';
import Modal from 'react-modal';
import TeamShowContainer from './teams/team_show_container';
import {Route, Redirect} from 'react-router-dom';

const customStyles = {
  content : {
    top                   : '25%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      modalIsOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  updateField(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  closeModal() {
    this.setState({name: '', modalIsOpen: false});
    this.props.clearTeamErrors();
  }

  openModal() {
    this.setState({modalIsOpen: true});
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
    this.props.createTeam(this.state);
    if (this.state.name.length > 0) {
      this.closeModal();
    }
    this.setState({name: ''});
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-logo"></div>

        <svg onClick={this.closeModal}
          className="XIcon CloseButton-xIcon"
          viewBox="0 0 32 32"
          >
          <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828">
          </polygon>
        </svg>
        <TeamShowContainer/>
        <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           style={customStyles}
           ariaHideApp={false}
           contentLabel="Example Modal"
         >
         <form onSubmit={this.handleSubmit} className="modal-form">
           <header className="modal-form-header">
             New Team
           </header>
           {this.renderErrors()}
           <label>Name
             <br/>
             <input
               type="text"
               value={this.state.name}
               onChange={this.updateField('name')}
               >
             </input>
           </label>
           <br/>
           <button>Create New Team</button>
         </form>
         </Modal>
      </div>
    );
  }
}
