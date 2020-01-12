import React, { Component } from 'react';
import Movies from "./components/movies/index";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Movies></Movies>
      </div>
    )
  }
}

export default App;
