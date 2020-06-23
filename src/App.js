import React from 'react';
import Navbar from './Containers/Navbar/Navbar.jsx'
import Observe from './Containers/Observe/Observe';
import Feedback from './Containers/Feedback/Feedback';
import Learn from './Containers/Learn/Learn';
import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
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
      <Observe />
      {/* <Feedback />
      <Learn /> */}
    </div>
  );
}

export default App;