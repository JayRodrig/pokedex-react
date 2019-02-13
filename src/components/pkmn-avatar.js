import React from 'react';

const PkmnAvatar = props => {
    return (
        <div className='col col-4 border'>
            <div className='col col-4'>
                <img className='pkmn-img border' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.pkmnID}.png`} alt='pokemon' />
            </div>
        </div>
    )
}

export default PkmnAvatar;