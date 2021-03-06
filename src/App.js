import React, { Component } from 'react'
import Navbar from './Containers/Navbar/Navbar.jsx'
import ActionStep from './Containers/ActionStep/ActionStep.jsx';
// import ActionStepForm from './Containers/ActionStep/ActionStepForm.jsx';
import CoachForms from './Containers/CoachForms/CoachForms.jsx';
import ObserveForm2 from './Containers/Observe/ObserveForm2.jsx'
// import FeedbackForm from './Containers/Feedback/FeedbackForm';
import Feedback from './Containers/Feedback/Feedback';
import LoginPage from './Containers/Login/LoginPage.jsx';
import Observe from './Containers/Observe/Observe';
// import ObserveForm from './Containers/Observe/ObserveForm';
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
    this.props.history.push('/')
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
              <div id="nav-bucket">
              <Navbar user={this.state.user} logOutUser={this.logOutUser} />
              </div>
              <Route path="/userhome" render={() => { return (<div><UserHome user={this.state.user} /></div>) }} />
              <Route path="/observe" render={() => { return (<div><Observe /></div>) }} />
              <Route path="/feedback" render={() => { return (<div><Feedback /></div>) }} />
              <Route path="/coachforms" render={() => { return (<div><ObserveForm2 user={this.state.user} /></div>) }} />
              <Route path="/actionstep" render={() => { return (<div><ActionStep user={this.state.user} /></div>) }} />
            </>
          }
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
