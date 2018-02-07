import React from 'react';
import TeammatesContainer from './teammates_container';
import ProjectIndexContainer from '../../../project/project_index_container';
import ReactModal from 'react-modal';
import NewProjectFormContainer from '../../../project/new_project_form_container';

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
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearProjectErrors();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  componentWillReceiveProps(nextProps) {
    let currentTeamId = Number(this.props.location.pathname.match(/\d+/));
    let nextPath = nextProps.location.pathname.split('/')[2];
    let nextTeamId = Number(nextProps.location.pathname.match(/\d+/));
    if (currentTeamId !== nextTeamId && nextPath === 'teams') {
      this.props.fetchTeam(nextTeamId);
    }
  }

  componentDidMount() {
    let teamId = Number(this.props.location.pathname.match(/\d+/));
    let pathname = this.props.location.pathname.split('/')[2];
    if (pathname === 'teams') {
      this.props.fetchTeam(teamId);
    }
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

        <ReactModal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           style={customStyles}
           ariaHideApp={false}
           contentLabel="Example Modal"
         >
         <NewProjectFormContainer closeModal={this.closeModal} />
       </ReactModal>
      </div>
    );
  }
}
