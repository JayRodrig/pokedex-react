import React, { Component } from 'react';
import Header from './components/header'
import Axios from 'axios';
import List from './components/list';
import ProfilePage from './components/profile-container';
import LoadMore from './components/loadmore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      id: [],
      listView: true, 
      profileView: false,
      profileToDisplay: '',
      loadMoreCount: 1,
      searchQuery: [],
    }
  }

  componentDidMount() {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
        .then(response => {
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
          this.setState({
            pokemon: pokeName,
            id: pokeID,
            });
        })
        .catch(e => {
          console.log(e);
        })
    }

    viewToggle = pkmnName => {
      this.setState({
        listView: !this.state.listView,
        profileView: !this.state.profileView,
        profileToDisplay: pkmnName,
      });
    }
    
    loadMorePkmn = () => {
      const pkmnToLoad = 20 * (this.state.loadMoreCount + 1);
      Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${pkmnToLoad}`)
        .then(response => {
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
          this.setState({
            pokemon: pokeName,
            id: pokeID,
            loadMoreCount: this.state.loadMoreCount + 1,
            });
        })
        .catch(e => {
          console.log(e);
        })
    }

    searchHandler = queryResult => {
      (queryResult.length > 0) ? 
        this.setState({
          searchQuery: queryResult,
        }) :
        this.setState({
          searchQuery: [],
        });
    }

  render() {
    return (
      <>
        <Header searchHandler={this.searchHandler} searchQuery={this.state.searchQuery}/> {/* Header component -> ./components/header.js */}
        {this.state.listView && 
        <>
          <List pokemon={this.state} viewToggle={this.viewToggle} />
          <LoadMore loadMorePkmn={this.loadMorePkmn}/>
        </>
        } {/* List component -> ./components/list.js */}
        {this.state.profileView && <ProfilePage pkmnName={this.state.profileToDisplay} List={List} 
          pokemon={this.state} viewToggle={this.viewToggle} LoadMore={LoadMore} loadMorePkmn={this.loadMorePkmn} />} {/* ProfilePage component -> ./components/profile-container.js*/}
      </>
    );
  }
}

export default App;

