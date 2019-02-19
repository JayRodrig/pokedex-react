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
      id: [],
      listView: true, 
      profileView: false,
      profileToDisplay: '',
    }
  }

  viewToggle = pkmnName => {
    this.setState({
      listView: !this.state.listView,
      profileView: !this.state.profileView,
      profileToDisplay: pkmnName,
    });
  }

  componentDidMount() {
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
    }

  render() {
    return (
      <>
        <Header /> {/* Header component -> ./components/header.js */}
        {this.state.listView && <List pokemon={this.state} viewToggle={this.viewToggle} />} {/* List component -> ./components/list.js */}
        {this.state.profileView && <ProfilePage pkmnName={this.state.profileToDisplay} List={List} 
          pokemon={this.state} viewToggle={this.viewToggle} />} {/* ProfilePage component -> ./components/profile-container.js*/}
      </>
    );
  }
}

export default App;

