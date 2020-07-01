import React from 'react';
import Navbar from './Containers/Navbar/Navbar.jsx'
import ObserveForm from './Containers/Observe/ObserveForm';
import FeedbackForm from './Containers/Feedback/FeedbackForm';
import ActionStepForm from './Containers/ActionStep/ActionStepForm.jsx';
import Login from './Containers/Login/Login.jsx';
import { withRouter, Switch, Route } from 'react-router-dom'
import './App.scss';


function App() {
  return (
    <div>
      <Login />
      <Navbar />
      <Switch>
        <Route path="/observeform" render={() => { return (<div><ObserveForm /></div>) }} />
        <Route path="/feedbackform" render={() => { return (<div><FeedbackForm /></div>) }} />
        <Route path="/actionstepform" render={() => { return (<div><ActionStepForm /></div>) }} />
      </Switch>
    </div>
  );
}

export default withRouter(App);