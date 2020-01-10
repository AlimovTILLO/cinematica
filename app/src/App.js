import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/movies"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ movies: data.sort((a, b) => b.rating - a.rating) });
      })
  }

  render() {
    console.log(this.state.movies)
    return (
      <div className="App">
        <table>
          <tr>
            <th>Названия</th>
            <th>Рейтинг</th>
            <th>Возрастное ограничение</th>
          </tr>
        {this.state.movies.map((post, index) => { 
          return (
            <tr key={index}>
              <td>{post.title}</td>
              <td>{post.rating}</td>
              <td>{post.age}+</td>
            </tr>
          )
        })}
        </table>
      </div>
    )
  }
}

export default App;
