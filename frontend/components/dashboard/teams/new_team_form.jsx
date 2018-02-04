import React from 'react';

export class NewTeamForm extends React.Component {
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
      <div>
        <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           ariaHideApp={false}
           contentLabel="Example Modal"
         >
         <form onSubmit={this.handleSubmit}>
           <label>Name
             <input
               type="text"
               value={this.state.name}
               onChange={this.updateField('name')}
               >
             </input>
           </label>
           <button>Create New Team</button>
         </form>
         </Modal>

      </div>
    );
  }
}
