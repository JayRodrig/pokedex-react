import React from 'react';
import Axios from 'axios';
import './profile-container.css'
import PkmnType from './pkmn-type';
import PkmnStats from './pkmn-stats';
import PkmnMoves from './pkmn-moves';
import PkmnSprites from './pkmn-sprites';
import ProfileHeader from './profile-header';
import PkmnCreds from './pkmn-creds';
import PkmnAvatar from './pkmn-avatar';

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
        Axios.get(`https://pokeapi.co/api/v2/pokemon/lapras`)
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
                    pkmnMoves: response.moves.map(e => e.move.name),
                })
                console.log(this.state);
            })
    }

    render() {
        return(
            <>
                <ProfileHeader name={this.state.pkmnName} />
                <PkmnCreds pkmnID={this.state.pkmnID} pkmnName={this.state.pkmnName} />
                <br></br>
                <br></br>
                <div className='row margin-side'>
                    <PkmnAvatar pkmnID={this.state.pkmnID} />
                    <div className='col col-8'>
                        <PkmnSprites sprites={this.state.pkmnSprites} />
                        <div className='title-default'>
                            Default
                        </div>
                    </div>
                </div>
            
                    <div className='col col-4 margin-side'>
                        <PkmnType type={this.state.pkmnType}/>
                    </div>
            
                <br></br>
                <br></br>
                <h3 className='margin-side title-base-stats'>Base Stats</h3>
                <div className='row margin-side stats-border'>
                    <div className='col col-12'>
                        <PkmnStats stats={this.state.pkmnStats} />
                    </div>
                </div>
                <br></br>
                <br></br>
                <h3 className='margin-side'>Moves</h3>
                <div className='row margin-side'>
                    <div className='col col-12'>
                        <PkmnMoves moves={this.state.pkmnMoves} />
                    </div>
                </div>

            </>
        )
    }
}

export default ProfilePage;