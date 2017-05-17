import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import CRUD from '../containers/CRUD';
import Todos from '../containers/Todos';
import NoMatch from './NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="pa2 ma2 tc">
        <h1 className="f1 blue">TODO REACT + REDUX</h1>
        <Link to="/" className="ma2 pa2 navy hover-white b f3">CRUD</Link>
        <Link to="/todos" className="ma2 pa2 navy hover-white b f3">TODOS</Link>
        <Switch>
          <Route exact path="/" component={CRUD}/>
          <Route path="/todos" component={Todos}/>
          <Route component={NoMatch}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;