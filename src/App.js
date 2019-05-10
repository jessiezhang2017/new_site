import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';

class App extends Component {


  render() {

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg">

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-aut">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
            </ul>
            </div>
          </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" render={()=>
           <
            About
            />
          }
        />
        <Route path="/projects/" render={()=>
            <
              ProjectList
            />
          }
        />

      </div>
    </Router>
  );
 }
}

export default App;
