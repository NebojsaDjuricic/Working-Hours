import React from 'react';
import { Button, Form, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

export default class ModalComponentDev extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, username :'' , timeWorks: '', project: ''};

    this.toggle = this.toggle.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeTimeWorks = this.handleChangeTimeWorks.bind(this);
    this.handleChangeProject = this.handleChangeProject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangeTimeWorks(event) {
    this.setState({timeWorks: event.target.value});
  }

  handleChangeProject(event) {
    this.setState({project: event.target.value});
  }

  handleSubmit(event) {
      event.preventDefault();

      this.setState({
         username: '',
         timeWorks: '',
         project: ''
      });

     }


  render() {
    return (

        <div>
         <div id="divAddDev">
            <Button color="success" onClick={this.toggle}>Add new Developer</Button>
         </div>
           <Modal isOpen={this.state.modal}>
              <Form onSubmit={this.handleSubmit}>
                <ModalHeader>New Developer</ModalHeader>
                <ModalBody>
                  <div className="row">
                     <div className="form-group col-md-4">
                        <label>Username:</label>
                        <Input type="text" value={this.state.username} onChange={this.handleChangeUsername} className="form-control" required/>
                     </div>
                  </div>

                  <div className="row">
                     <div className="form-group col-md-4">
                        <label>Working hours:</label>
                        <Input type="text" value={this.state.timeWorks} onChange={this.handleChangeTimeWorks} className="form-control" />
                     </div>
                  </div>

                  <div className="row">
                     <div className="form-group col-md-4">
                        <label>Project:</label>
                        <Input type="text" value={this.state.project} onChange={this.handleChangeProject} className="form-control" />
                     </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
                  <Button color="danger" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Form>
           </Modal>

        </div>

    );
  }
}
