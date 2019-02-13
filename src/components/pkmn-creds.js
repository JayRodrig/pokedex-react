import React from 'react';

const PokemonCreds = props => {
    return (
        <div className='row margin-side border'>
            <div className='col col-12 pkmn-name-div'>
                #{props.pkmnID} - {props.pkmnName}
            </div>
        </div>
    )
}

export default PokemonCreds;