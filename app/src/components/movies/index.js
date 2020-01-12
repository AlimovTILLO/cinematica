import React, { Component } from 'react';
import { changeRandomItem } from '../../utils/functions';
import { getData } from '../../services/api.service';
import '../../App.css';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        getData('movies').then(data => this.setState({
            movies: data
          }))
    }

    shouldComponentUpdate(nextState) {

        setTimeout(() => {
            let newstate = changeRandomItem(this.state.movies);
            this.setState({ movies: newstate })
        }, 3000)

        return this.state.movies !== nextState.movies;
    }

    render() {
        return (
            <div id='grid'>
                {this.state.movies.sort((a, b) => b.rating - a.rating).map((post, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card__title">{post.title}</div>
                            <div className="card__rating">{post.rating}</div>
                            <div className="card__age">{post.age}+</div>
                            <div className="card__image"><img src={process.env.PUBLIC_URL + post.image} alt={post.title}></img></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Movies;
