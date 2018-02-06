import React from 'react';
import TeammatesContainer from './teammates_container';
import ProjectIndexContainer from '../../../project/project_index_container';
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

export class TeamSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
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
    this.setState({title: '', modalIsOpen: false});
    this.props.clearProjectErrors();
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
    this.props.createProject(this.state)
    .then(() => this.closeModal());
  }

  componentWillReceiveProps(nextProps) {
    let currentTeamId = Number(this.props.location.pathname.match(/\d+/));
    let nextTeamId = Number(nextProps.location.pathname.match(/\d+/));
    if (currentTeamId !== nextTeamId) {
      this.props.fetchTeam(nextTeamId);
    }
  }

  componentDidMount() {
    let teamId = Number(this.props.location.pathname.match(/\d+/));
    this.props.fetchTeam(teamId);
  }

  render() {
    return (
      <div>
        <div className="sidebar-section">
          <TeammatesContainer/>

        </div>
        <div className="sidebar-section">
          <div className="sidebar-title">
            <p>Projects</p>
              <svg onClick={this.openModal} className="Icon PlusIcon" viewBox="0 0 32 32">
                <polygon points="28,14 18,14 18,4 14,4 14,14 4,14 4,18 14,18 14,28 18,28 18,18 28,18">
                </polygon>
              </svg>
          </div>
          <ProjectIndexContainer/>
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
           <header className="modal-form-header">
             New Project
             <svg onClick={this.closeModal}
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
         </Modal>
      </div>
    );
  }
}
