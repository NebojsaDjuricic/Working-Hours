import React, { Component } from 'react';

export default class Home extends Component {
  state = {
  }

  render () {
      return (
        <div className="divHome">

          <div className="widget center">
            <div className="blur">
            </div>
          </div>

          <div className="home">
            <div className="text center">
              <h1>Working Hours</h1>
            </div>
          </div>

          <div id="down">
            <div className="homeRoutes">
              <div id="divBtnProj">
                <a href="http://localhost:3000/projects" className="button" id="btnProj">Projects</a>
              </div>
              <div id="divBtnDev">
                <a href="http://localhost:3000/developers" className="button" id="btnDev">Developers</a>
              </div>
              <div id="divBtnRep">
                <a href="http://localhost:3000/reports" className="button" id="btnRep">Reports</a>
              </div>

            </div>
          </div>

        </div>

      )
   }

}
