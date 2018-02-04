import React from 'react';
import { TeamIndexItem } from './team_index_item';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-modal';

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


export class TeamIndex extends React.Component {
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

  componentDidMount() {
    this.props.fetchTeams();
  }

  updateField(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTeam(this.state);
    this.closeModal();
  }

  render() {
    return (

      <div className="sidebar-section">
        <div className="sidebar-title">
          <p>Teams</p>
          <svg onClick={this.openModal} className="Icon PlusIcon" viewBox="0 0 32 32"
            height="10" width="10">
            <polygon points="28,14 18,14 18,4 14,4 14,14 4,14 4,18 14,18 14,28 18,28 18,18 28,18">
            </polygon>
          </svg>
      </div>
      <div className="sidebar-list">
        <ul>
          {this.props.teams.map(team => {
            return <li key={team.id}>
              <Link to={`/dashboard/teams/${team.id}`}>
                {team.name}
              </Link>
            </li>;
          })}
        </ul>
      </div>
        <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           style={customStyles}
           ariaHideApp={false}
           contentLabel="Example Modal"
         >
         <form onSubmit={this.handleSubmit} className="modal-form">
           <header className="dialog-header">
             New Team
           </header>
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
