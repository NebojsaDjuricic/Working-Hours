import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,id: '',title :'' ,developers: '', minutes: ''};

    this.toggle = this.toggle.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDevelopers = this.handleChangeDevelopers.bind(this);
    this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeID(event) {
    this.setState({id: event.target.value});
  }
  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  handleChangeDevelopers(event) {
    this.setState({developers: event.target.value});
  }

  handleChangeMinutes(event) {
    this.setState({minutes: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    return (

        <div>
           <div id="divAddProj">
            <Button id="btnAddProj" color="success" onClick={this.toggle}>Add new Project</Button>
           </div>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>New Project</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
            <label>ID:</label>
            <input type="text" value={this.state.id} onChange={this.handleChangeID} className="form-control" />
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
            <label>Title:</label>
                <input type="text" value={this.state.title} onChange={this.handleChangeTitle} className="form-control" />
               </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
              <label>Developers:</label>
                <input type="text" value={this.state.developers} onChange={this.handleChangeDevelopers} className="form-control" />
               </div>
              </div>
            <div className="row">
               <div className="form-group col-md-4">
                <label>Minutes:</label>
                  <input type="text" value={this.state.minutes} onChange={this.handleChangeMinutes} className="form-control" />
                 </div>
                </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>

    );
  }
}
