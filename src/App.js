import React, { Component } from 'react';
import Axios from 'axios';
import Header from './components/header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    }
  }
  render() {
    return (
      <Header /> // Header component -> ./components/header.js
    );
  }
}

export default App;
