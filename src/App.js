import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import { dictionary } from './dictionary.js'
import { setDictionary } from './redux/actions'

class App extends React.Component {
  componentDidMount(){
    this.props.setDictionary(dictionary)
  }

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

export default withRouter(connect(mapStateToProps, { setDictionary })(App));
