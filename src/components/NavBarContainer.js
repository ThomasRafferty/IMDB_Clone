import React, {Component} from 'react';
import SearchBarContainer from './SearchBarContainer'

class NavBarContainer extends Component {
  render() {
    return (
      <header id="top-nav">
        <div id="brand">Rafferty IMDB Clone</div>
        <SearchBarContainer />
      </header>
    );
  }
}
export default NavBarContainer;
