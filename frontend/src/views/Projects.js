import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ReactBsTable, BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import DefaultCustomInsertModalHeaderTable from '../components/TabelaModal';

var projects = [{
      id: 1,
      title: "Project 1",
      developers: "John Doe",
      hours: 120
  }
  , {
     id: 2,
     title: "Project 2",
     developers: "Mike Smith",
     hours: 100
  },
  {
     id: 3,
     title: "Project 3",
     developers: "Kyle Strongman",
     hours: 180
  },
  {
     id: 4,
     title: "Project 4",
     developers: "Phill Green",
     hours: 60
  }

];



export default class Projects extends Component {
  state = {
  }

  render () {


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
            <div id="projTable">
               <BootstrapTable data={ projects } insertRow  style="overflow-y:scroll">
                 <TableHeaderColumn dataField='id' isKey>Project ID</TableHeaderColumn>
                 <TableHeaderColumn dataField='title'>Project Title</TableHeaderColumn>
                 <TableHeaderColumn dataField='developers'>Developers</TableHeaderColumn>
                 <TableHeaderColumn dataField='hours'>Hours</TableHeaderColumn>
                 <TableHeaderColumn ></TableHeaderColumn>
                 <TableHeaderColumn ></TableHeaderColumn>
               </BootstrapTable>
            </div>
          </div>

        </div>
      )
   }

}
