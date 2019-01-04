import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import ModalComponent from '../components/ModalComponent';

export default class Projects extends Component {

   state = {
    projects: []
   }

   componentDidMount() {
      axios.get('http://localhost:9999/projects')
           .then(response => {
               this.setState({projects: response.data});
               console.log(response);
           });


   }

  render () {
     const projects = this.state.projects.map(project => {
        return <Project key={project.id} id={project.id} title={project.title} developers={project.developers.username} minutes={project.minutes}/>;
     })


      return (
        <div className="divProj">

          <div id="divUpProj">
            <div id="titleProj">
               <h1>Projects overview</h1>
               <a href="http://localhost:3000/" id="btnProjHome" className="btn btn-info" role="button">Home</a>
               <a href="http://localhost:3000/developers" id="btnProjDev" className="btn btn-info" role="button">Developers</a>
               <a href="http://localhost:3000/reports" id="btnProjRep" className="btn btn-info" role="button">Reports</a>
            </div>
          </div>

          <div id="divDownProj">
            <ModalComponent />
            <div id="projTable">
               <table className="table table-hover" >
                 <thead className="thead-dark">
                  <tr>
                    <th>Project ID</th>
                    <th>Title</th>
                    <th>Developers</th>
                    <th>Minutes on Project</th>
                    <th></th>
                    <th></th>
                  </tr>
                 </thead>
                 <tbody id="tblBody">
                   {projects}
                 </tbody>
               </table>
            </div>

          </div>



        </div>
      )
   }

}
