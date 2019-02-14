import React from 'react';

const PkmnAvatar = props => {
    return (
        <div className='col col-4'>
            <div className='col col-4'>
                {(props.pkmnID) ? 
                    <img className='pkmn-img' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.pkmnID}.png`} alt='pokemon' /> 
                    : <p>Loading...</p>}   
            </div>
        </div>
    )
}

export default PkmnAvatar;