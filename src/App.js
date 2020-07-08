import React, { Component } from 'react'
import Navbar from './Containers/Navbar/Navbar.jsx'
import ActionStepForm from './Containers/ActionStep/ActionStepForm.jsx';
import FeedbackForm from './Containers/Feedback/FeedbackForm';
import LoginPage from './Containers/Login/LoginPage.jsx';
import Observe from './Containers/Observe/Observe';
import ObserveForm from './Containers/Observe/ObserveForm';
import UserHome from './Containers/UserHome/UserHome';
import { withRouter, Switch, Route } from 'react-router-dom'
import { databaseBasicUrl } from '../src/config'

import './App.scss';

export class App extends Component {

  state = { user: null }

  setUser = (loggedInUser) => {
    this.setState({ user: loggedInUser })
  }

  logOutUser = () => {
    this.setState({ user: null })
    localStorage.removeItem('userId')
  }

  componentDidMount() {
    this.autoLogin()
  }

  autoLogin() {
    let userId = localStorage.getItem('userId')
    if (userId) {
      fetch(`${databaseBasicUrl}/autologin`, {
        headers: {
          'accept': 'application/json',
          Authorization: userId
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setUser(data)
          this.props.history.push('/userhome')
        })
    }
  }

  render() {
    return (
      <div>
        <Switch>
          {!this.state.user ?
            <>
              <Route path="/" render={() => { return (<div><LoginPage setUser={this.setUser} /></div>) }} />
            </>
            :
            <>
              <Navbar logOutUser={this.logOutUser} />
              <Route path="/userhome" render={() => { return (<div><UserHome user={this.state.user} /></div>) }} />
              <Route path="/observe" render={() => { return (<div><Observe /></div>) }} />
              <Route path="/observeform" render={() => { return (<div><ObserveForm /></div>) }} />
              <Route path="/feedbackform" render={() => { return (<div><FeedbackForm /></div>) }} />
              <Route path="/actionstepform" render={() => { return (<div><ActionStepForm /></div>) }} />
            </>
          }
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);