import React, { Component } from 'react';
import axios from 'axios';
import Developer from './Developer';
import ModalComponentDev from '../components/ModalComponentDev';
import { Button, Form, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

export default class Developers extends Component {

  state = {
     developers: []
  }

  componentDidMount() {
     axios.get('http://localhost:9999/developers')
          .then(response => {
              this.setState({developers: response.data});
              console.log(response);
          });
  }

  render () {
      const developers = this.state.developers.map(developer => {
         return <Developer key={developer.username} username={developer.username} timeWorks={developer.project.minutes} project={developer.project.title}/>;
      })

      return (
         <div className="divDev">

           <div id="divUpDev">
              <div id="titleDev">
                <h1>Developers overview</h1>
                <a href="http://localhost:3000/" id="btnDevHome" className="btn btn-info" role="button">Home</a>
                <a href="http://localhost:3000/projects" id="btnDevProj" className="btn btn-info" role="button">Projects</a>
                <a href="http://localhost:3000/reports" id="btnDevRep" className="btn btn-info" role="button">Reports</a>
              </div>
           </div>

           <div id="divDownDev">
           <ModalComponentDev />
               <div id="devTable">
                   <table className="table table-hover" >
                    <thead className="thead-dark">
                     <tr>
                       <th>Username</th>
                       <th>Working Hours</th>
                       <th>Project</th>
                       <th></th>
                       <th></th>
                     </tr>
                    </thead>
                    <tbody id="tblBody">
                      {developers}
                    </tbody>
                  </table>
               </div>
           </div>

         </div>
      )
   }

}
