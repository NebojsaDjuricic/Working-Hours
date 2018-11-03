import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './views/Home';
import Developers from './views/Developers';
import Projects from './views/Projects';
import Reports from './views/Reports';

export const Routes = () => (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/>' component={Home} />
      <Route path='developers' component={Developers} />
      <Route path='projects' component={Projects} />
      <Route path='reports' component={Reports} />
      <Route path='*' component={Home} />
    </Switch>
);

export default Routes;
