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
    let pokemonArr = [];
    let spritesArr = [];
    let idArr = [];
    // for (let i = 1; i < 21; i++){ 
      // Axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`)
      Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
        .then(response => {
          console.log(response)
          return response.data.results
          // console.log(response);
          // let pokeNames = response.data.name;
          // let pokeSprites = response.data.sprites.front_default;
          // let pokeId = response.data.id;
          // pokemonArr.push(pokeNames)
          // spritesArr.push(pokeSprites)
          // idArr.push(pokeId)
          // return {
          //   pokeNames: pokemonArr, 
          //   pokeSprites: spritesArr, 
          //   pokeId: idArr,
          // }
        })
        .then(pokeArr => {
          let pokeName = [];
          let pokeID = [];
          pokeArr.forEach((e, i) => {
            pokeName.push(e.name);
            pokeID.push(i + 1);
          })
          console.log(pokeName)
          console.log(pokeID)
          this.setState({
            pokemon: pokeName,
            id: pokeID,
            });
        })
        .catch(e => {
          console.log(e);
        })
    // }
      console.log('the state is: ', this.state)
      console.log(pokemonArr)
      // console.log(spritesArr)
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

