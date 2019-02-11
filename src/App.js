import React, { Component } from 'react';
import Header from './components/header'
import List from './components/list';
import Pokemon from './services/initial-poke';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: Pokemon,
    }
  }

  componentDidMount() {
    console.log('initial state was loaded');
  }

  render() {
    return (
      <>
        <Header /> {/* Header component -> ./components/header.js */}
        <List pokemon={this.state.pokemon}/> {/* List component -> ./components/list.js */}
      </>
    );
  }
}

export default App;

