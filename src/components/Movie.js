import React, { Component } from 'react';

class Movie extends Component {

  render () {
    let { movie } = this.props;
    let poster_url = 'https://image.tmdb.org/t/p/w92' + movie.poster_path;
    // console.log(poster_url)
    return (
      <div>
        <h4> { movie.original_title } </h4>
        <div><img src={poster_url} alt="Movie Poster"/></div>
      </div>
    );
  }

}

export default Movie;
