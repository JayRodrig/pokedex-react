import React from 'react';
import Axios from 'axios';
import './profile-container.css'

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

    render() {
        return(
            <>
                <div className='row margin-side border'>
                    <div className='col col-3'>
                        Home >> Bulbasaur
                    </div>
                </div>
                <br></br>
                <div className='row margin-side border'>
                    <div className='col col-12 pkmn-name-div'>
                        #001 - Bulbasaur
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='row margin-side'>
                    <div className='col col-4 border'>
                        <img className='pkmn-img' src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' alt='pokemon' />
                    </div>
                    <div className='col col-2 padding-top-sprites border'>
                        <img className='pkmn-sprites' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' alt='pkmn-sprite'></img>
                    </div>
                    <div className='col col-2 padding-top-sprites border'>
                        <img className='pkmn-sprites' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' alt='pkmn-sprite'></img>
                        <div className='row title-default'>
                            Default
                        </div>
                    </div>
                    <div className='col col-2 padding-top-sprites border'>
                        <img className='pkmn-sprites' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' alt='pkmn-sprite'></img>
                    </div>
                    <div className='col col-2 padding-top-sprites border'>
                        <img className='pkmn-sprites' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' alt='pkmn-sprite'></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-2 type-div type'>
                        <span class="badge badge-primary">Primary</span>
                    </div>
                    <div className='col col-2 type-div type'>
                        <span class="badge badge-primary">Primary</span>
                    </div>
                </div>
            </>
        )
    }
}

export default ProfilePage;