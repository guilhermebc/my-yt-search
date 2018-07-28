import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Search from './Search/Search';

const apiKEY = 'AIzaSyD6VsQOvaQ0PGeLPAV4l7Ym1CbNtZmSZOQ';
const rootAPI = 'https://www.googleapis.com/youtube/v3/search';
const numResults = 10;

class App extends Component {
  render() {
    return (
      <div>
        <Header title="My YT Search"/>
        <div className="container">
          <Search rootAPI={rootAPI} apiKEY={apiKEY} numResults={numResults}/>
        </div>
      </div>
    );
  }
}

export default App;
