import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ReactBsTable, BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import DefaultCustomInsertModalHeaderTable from '../components/TabelaModal';

var developers = [{
      id: 1,
      username: "johndoe",
      project: "Project 1",
      hours: 120
  }
  , {
     id: 2,
     username: "mikesmith",
     project: "Project 2",
     hours: 100
  },
  {
     id: 3,
     username: "kylestrong",
     project: "Project 3",
     hours: 180
  },
  {
     id: 4,
     username: "pgreen",
     project: "Project 4",
     hours: 60
  }

];



export default class Developers extends Component {
  state = {
  }

  render () {
      return (
         <div className="divDev">

           <div id="divUpDev">
              <div id="titleDev">
                <h1>Developers overview</h1>
                <a href="http://localhost:3000/projects" class="btn btn-info" role="button">Projects</a>
              </div>
           </div>

           <div id="divDownDev">
                <div id="devTable">
                   <BootstrapTable data={ developers } insertRow  style="overflow-y:scroll">
                     <TableHeaderColumn dataField='id' isKey>Developer ID</TableHeaderColumn>
                     <TableHeaderColumn dataField='username'>Username</TableHeaderColumn>
                     <TableHeaderColumn dataField='project'>Project</TableHeaderColumn>
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
