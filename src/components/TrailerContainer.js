import React, { Component } from 'react';
import Movie from './Movie'

class TrailerContainer extends Component {
  
  render () {
    let { trailers } = this.props

    return (
      <div>
        <p> Trailer Container</p>
        <div>
        { trailers.map( (movie, i) =>
          <Movie
            key={i}
            movie={movie}
          />
        )}
      </div>
    </div>
    );
  }
}

export default TrailerContainer;
