import React, { Component } from 'react';
import Header from './components/header'
import Axios from 'axios';
import List from './components/list';
import Pokemon from './services/initial-poke';
import PokemonList from './services/poke-list';
import ProfilePage from './components/profile-container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: Pokemon,
      sprites: [],
    }
  }

  componentDidMount() {
    console.log('initial state was loaded');
    console.log('this is the state... ', this.state);
    for (let i = 0; i < 20; i++){ 
      Axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        })
    }
  }

  render() {
    return (
      <>
        <Header /> {/* Header component -> ./components/header.js */}
        <List pokemon={this.state.pokemon}/> {/* List component -> ./components/list.js */}
        {/* <ProfilePage /> */}
      </>
    );
  }
}

export default App;

