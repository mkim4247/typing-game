import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-dom'
import { connect } from 'react-redux'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={ () => (
            <Home />
          )} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(App));
