import React from 'react';
import Axios from 'axios';
import './profile-container.css'
import PkmnType from './pkmn-type';
import PkmnStats from './pkmn-stats';
import PkmnMoves from './pkmn-moves';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pkmnName: '',
            pkmnID: 0,
            pkmnSprites: [],
            pkmnType: [],
            pkmnStats: [],
            pkmnMoves: [],
        }
    }

    componentDidMount() {
        console.log('initial state has been loaded');
        Axios.get(`https://pokeapi.co/api/v2/pokemon/pidgeot`)
            .then(response => {
                return response.data;
            })
            .then(response => {
                console.log(response);
                this.setState({
                    pkmnName: `${response.name[0].toUpperCase()}${response.name.slice(1).toLowerCase()}`,
                    pkmnID: (response.id < 10) ? `00${response.id}` : (response.id.toString().length === 2 ? `0${response.id}` : response.id),
                    pkmnSprites: [response.sprites.front_default, response.sprites.front_shiny, response.sprites.back_default, response.sprites.back_shiny],
                    pkmnType: response.types.map(e => e.type.name),
                    pkmnStats: response.stats.map(e => ({name: e.stat.name, value: e.base_stat,})),
                    pkmnMoves: [response.moves[0].move.name, response.moves[1].move.name, response.moves[2].move.name],
                })
                console.log(this.state);
            })
    }

    render() {
        return(
            <>
                <div className='row margin-side border'>
                    <div className='col col-3'>
                        Home >> {this.state.pkmnName}
                    </div>
                </div>
                <br></br>
                <div className='row margin-side border'>
                    <div className='col col-12 pkmn-name-div'>
                        #{this.state.pkmnID} - {this.state.pkmnName}
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='row margin-side'>
                    <div className='col col-4 border'>
                        <div className='col col-4'>
                            <img className='pkmn-img border' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.state.pkmnID}.png`} alt='pokemon' />
                        </div>
                    </div>
                    
                    <div className='col col-8 border'>
                        {/* pkmn sprites */}
                        <div className='title-default'>
                            Default
                        </div>
                    </div>
                </div>

                <div className='row border type-row'>
                    <div className='col col-4 border margin-side'>
                        <PkmnType type={this.state.pkmnType}/>
                    </div>
                </div>
                <br></br>
                <br></br>
                
                <h3 className='margin-side'>Base Stats</h3>

                <div className='row margin-side border'>
                    <div className='col col-12 border'>
                        <PkmnStats stats={this.state.pkmnStats} />
                    </div>
                </div>
                <br></br>
                <br></br>

                <h3>Moves</h3>

                <div className='row margin-side border'>
                    <div className='col col-12 border'>
                        <PkmnMoves moves={this.state.pkmnMoves} />
                    </div>
                </div>

            </>
        )
    }
}

export default ProfilePage;