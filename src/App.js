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
      pokemon: [],
      sprites: [],
      id: [],
    }
  }

  componentDidMount() {
    // console.log('initial state was loaded');
    // console.log('this is the state... ', this.state);
    // for (let i = 1; i < 21; i++){ 
      // Axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`)
      Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
        .then(response => {
          console.log(response)
          return response.data.results
        })
        .then(pokeArr => {
          let pokeName = [];
          let pokeID = [];
          pokeArr.forEach((e, i) => {
            pokeName.push(e.name);
            let id = i + 1;
            if (id < 10) {
              return pokeID.push(`00${id}`)
            }
            if (id < 100) {
              return pokeID.push(`0${id}`)
            } 
            return pokeID.push(id)
          })
          // console.log(pokeName)
          // console.log('pokeID is: ', pokeID)
          this.setState({
            pokemon: pokeName,
            id: pokeID,
            });
        })
        .catch(e => {
          console.log(e);
        })
      // console.log('the state is: ', this.state)
    }

  render() {
    return (
      <>
        <Header /> {/* Header component -> ./components/header.js */}
        <List pokemon={this.state}/> {/* List component -> ./components/list.js */}
        {/* <ProfilePage /> */} {/* ProfilePage component -> ./components/profile-container.js*/}
      </>
    );
  }
}

export default App;

