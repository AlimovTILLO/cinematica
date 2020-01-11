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
        this.setState({ movies: data });
      })
  }

  shouldComponentUpdate(nextState) {

    function getRandomIndex(items) {
      return Math.floor(Math.random() * items.length);
    }

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        let removedItem = this.state.movies.splice(getRandomIndex(this.state.movies), 1);
        removedItem[0].rating = (Math.random() * 10).toFixed(2)
        this.state.movies.push(removedItem[0])
        console.log(removedItem[0])
      }
      let newstate = this.state.movies;
      this.setState({ movies: newstate })
    }, 3000)

    return this.state.movies !== nextState.movies;
  }

  render() {
    console.log(this.state.movies)
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Названия</th>
              <th>Рейтинг</th>
              <th>Возрастное ограничение</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.sort((a, b) => b.rating - a.rating).map((post, index) => {
              return (
                <tr key={index}>
                  <td>{post.title}</td>
                  <td>{post.rating}</td>
                  <td>{post.age}+</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
