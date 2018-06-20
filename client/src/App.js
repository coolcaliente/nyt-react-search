import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from './components/Jumbotron';
import Wrapper from "./components/Wrapper";
import Articles from './pages/Articles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Jumbotron />
          <Wrapper>
            <Articles>

            </Articles>
          </Wrapper>
        </Router>
      </div>
    );
  }
}

export default App;
