import React from 'react';
import Navbar from './Containers/Navbar/Navbar.jsx'
import ObserveForm from './Containers/Observe/ObserveForm';
import Feedback from './Containers/Feedback/Feedback';
import Learn from './Containers/Learn/Learn';
import './App.scss';
import { withRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/observeform" render={() => { return (<div><ObserveForm /></div>) }} />

      </Switch>

      {/* <div className="TeacherHeader">
        <h4>Teacher:
          <select>
            <option value="plum">Plum</option>
            <option value="mustard">Mustard</option>
            <option value="peacock">Peacock</option>
          </select>
        </h4>
        <h4>Coach: Scarlet</h4>
      </div> */}
      {/* <Feedback />
      <Learn /> */}
    </div>
  );
}

export default withRouter(App);