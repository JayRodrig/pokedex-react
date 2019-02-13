import React from 'react';
import './profile-container.css'

const PkmnSprites = props => {
    return (
        props.sprites.map((e, i) => {
            return <div className='col col-2 sprite-div inline margin-left' key={i}>
            <img className='pkmn-sprites' src={e} alt='pkmn-sprite'></img>
        </div>
        })
    )
}

export default PkmnSprites;