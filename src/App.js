import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar/>
        <canvas id="canvas" className="canvas" width="100"></canvas>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
}
export default App;
