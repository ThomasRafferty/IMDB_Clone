import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import TrailerContainer from './components/TrailerContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      movies: [],
      trailers: []
     };
}

  componentDidMount(){
    $.ajax({
      url: "https://api.themoviedb.org/3/movie/popular?api_key=d79de6ee1c82db4edf8d1d1e6e434d95&language=en-US&page=1"
    })
    .done((res) => {
  console.log(res)
      let trailerContainerNumber = 3;
      let trailers = res.results.slice(0, trailerContainerNumber);
      this.setState({trailers: trailers})
    })
  }

  selectMovie(){
    let { movies } = this.state;

    
  }

  render() {
    let { trailers } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1> Thomas's IMDB Clone </h1>
        </header>
        <div className="App-intro">
          <TrailerContainer
            trailers={trailers}
          />
        </div>
      </div>
    );
  }
}

export default App;
