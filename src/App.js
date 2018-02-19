import React, { Component } from 'react';
import _ from 'lodash';
import Search from './Search';
import AlbumList from './AlbumList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      albums: {}
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleQueryUpdate = this.handleQueryUpdate.bind(this);
  }

  handleSearch(event) {
    fetch(`https://itunes.apple.com/search?term=$${this.state.query}`)
    .then(response => response.json())
    .then(({results}) => this.setState({
      albums: this.getAlbumsFromResults(results)
    }));
  }

  handleQueryUpdate(event) {
    event.preventDefault();
    this.setState({
      query: event.target.value
    });
  }

  getAlbumsFromResults(results) {
    return _.reduce(results, (albums, result) => result.collectionName in albums
      ? albums
      : { ...albums, [result.collectionName]: result.artworkUrl100 },
      {}
    );
  }

  render() {
    return (
      <div className="background">
        <div className="app">
          <h1>iTunes Search</h1>
          <Search handleSearch={this.handleSearch} handleQueryUpdate={this.handleQueryUpdate} />
          <AlbumList id="albums-container" albums={this.state.albums} />
        </div>
      </div>
    );
  }
}

export default App;
