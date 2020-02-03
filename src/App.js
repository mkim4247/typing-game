import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'

class App extends React.Component {
  render(){
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
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(App));
