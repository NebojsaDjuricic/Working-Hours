import React from 'react';
import '../css/App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../views/Home';
import Developers from '../views/Developers';
import Projects from '../views/Projects';
import Reports from '../views/Reports';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


export default class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">

              <Home />
            </div>
          )}/>
          <Route exact={true} path='/projects' render={() => (
            <div className="Projekti">
              <Projects />
            </div>
          )}/>
          <Route exact={true} path='/developers' render={() => (
            <div className="Developeri">
              <Developers />
            </div>
          )}/>
          <Route exact={true} path='/reports' render={() => (
            <div className="App">
              <Reports />
            </div>
          )}/>
        </div>
      </BrowserRouter>


    );
  }
}
