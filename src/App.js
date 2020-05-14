import React from 'react';
import './App.css';
import Navbar from './Containers/Navbar/Navbar.jsx'
import Observe from './Containers/Observe/Observe';
import Feedback from './Containers/Feedback/Feedback';

function App() {
  return (
    <div>
      <Navbar />
      <Observe />
      <Feedback />
    </div>
  );
}

export default App;