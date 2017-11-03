import React, {Component} from 'react';
import $ from 'jquery'
class SearchBarContainer extends Component {
  constructor(){
    super();

    this.state = { query: ''};
  }


  changeHandler(e){
    // if(e.target.value === ''){
    //   $.ajax({
    //     url: `https://api.themoviedb.org/`,
    //
    //     method: 'get'
    //   }).done(function(response) {
    //     this.props.replaceState(response);
    //   }.bind(this))
    // } else {
    //   $.ajax({
    //     url: `http://localhost:5000/tweets/search/${e.target.value}`,
    //     method: 'get'
    //   }).done(function(response) {
    //     this.props.replaceState(response);
    //   }.bind(this))
    // }

  }

  render() {
    return (
      <div>
        <form id="search-form">
            <input onChange={this.changeHandler.bind(this)} id="search" type="text" name="query" />
        </form>
        <i className="fa fa-search"></i>
      </div>
    );
  }
}
export default SearchBarContainer;
