import React, { Component } from 'react'
import Navbar from './Containers/Navbar/Navbar.jsx'
import ObserveForm from './Containers/Observe/ObserveForm';
import FeedbackForm from './Containers/Feedback/FeedbackForm';
import ActionStepForm from './Containers/ActionStep/ActionStepForm.jsx';
import LoginPage from './Containers/Login/LoginPage.jsx';
import { withRouter, Switch, Route } from 'react-router-dom'
import './App.scss';

export class App extends Component {

  state = { user: null }

  setUser = (loggedInUser) => {
    this.setState({ user: loggedInUser })
  }

  render() {
    console.log(this.state.user)
    return (
      <div>
        {!this.state.user ?
          <Route path="/login" render={() => { return (<div><LoginPage setUser={this.setUser} /></div>) }} />
          :
          <Switch>
            <Navbar />
            <Route path="/observeform" render={() => { return (<div><ObserveForm /></div>) }} />
            <Route path="/feedbackform" render={() => { return (<div><FeedbackForm /></div>) }} />
            <Route path="/actionstepform" render={() => { return (<div><ActionStepForm /></div>) }} />
          </Switch>
        }
      </div>
    );
  }
}

export default withRouter(App);