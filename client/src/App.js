import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

class App extends Component {

  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>

    );
  }

}

export default App;
