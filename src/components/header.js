import React from 'react';
import './header.css'

const Header = props => {
    return(
        <>
            <div className='banner'></div>
            <div className='container'>
                <h3 className='title'>Pursuit Pokedex</h3>
                <input type='text' className='input-field' placeholder='Search...'/>
            </div>
        </>
    )
}

export default Header;