import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import Developer from './Developer';

export default class Reports extends Component {
   state = {
      projects: [],
      developers: []
   }

   componentDidMount() {
      axios.get('http://localhost:9999/projects')
           .then(response => {
               this.setState({projects: response.data});
               console.log(response);
           });

      axios.get('http://localhost:9999/developers')
           .then(response => {
               this.setState({developers: response.data});
               console.log(response);
           });
   }

  render () {
      // const projects = this.state.projects.map(project => {
      //   return <Project key={project.id} title={project.title}/>;
      // })

      // const developers = this.state.developers.map(developer => {
      //   return <Developer key={developer.username} username={developer.username} />;
      // })

      const projects = this.state.projects.map(project => {
        return <option key={project.title}>{project.title}</option>;
      })

      const developers = this.state.developers.map(developer => {
         return <option key={developer.username}>{developer.username}</option>;
      })

      return (
        <div className="divRep">

           <div id="divUpRep">
               <div id="titleRep">
                 <h1>Reports overview</h1>
                 <a href="http://localhost:3000/" id="btnRepHome" className="btn btn-info" role="button">Home</a>
                 <a href="http://localhost:3000/projects" id="btnRepProj" className="btn btn-info" role="button">Projects</a>
                 <a href="http://localhost:3000/developers" id="btnRepDev" className="btn btn-info" role="button">Developers</a>
               </div>
           </div>

           <div id="divDownRep" className="row">
               <div  id="divDownRepLeft">
                  <div id="divInnerLeft">
                     <div id="divChooseProj">
                       <label className="form-group col-md-6" id="lblProj">Choose project</label>
                       <select className="form-group col-md-4">
                        { /* {this.state.projects.map((project) => <option key={project.id}>{project.title}</option>)} */ }
                        {projects}
                       </select>
                     </div>

                     <div id="divChooseDev">
                       <label className="form-group col-md-6" id="lblDev">Choose developer</label>
                       <select className="form-group col-md-4">
                       { /* {this.state.developers.map((project) => <option key={developer.username}>{developer.username}</option>)} */ }
                         {developers}
                       </select>
                     </div>

                     <div id="divBtnSubmit">
                        <button id="btnSubmit" className="btn btn-info form-group col-md-2" type="submit">Submit</button>
                     </div>

                   </div>

               </div>

               <div  id="divDownRepRight" >
                  <label id="workHoursLbl">Working hours:</label>
                  <output id="workHours"type="text">{developers.minutes}</output>
               </div>

           </div>

        </div>
      )
   }

}
