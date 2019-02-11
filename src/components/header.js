import React from 'react';
import './header.css'

const Header = props => {    
    return(
        <>
            <div className='header'>
                <div className='banner'></div>
                <div className='container input-field-container'>
                        <div className='row'>
                            <div className='col col-2 img-divs'>
                                <img src='https://www.freeiconspng.com/uploads/pokeball-icon-20.jpg' alt='pokeball' className='img'/>
                            </div>
                            <div className='col col-8'>
                                <h3 className='title'>Pursuit Pokedex</h3>
                                <input type='text' placeholder='Search...' className='input-field'/>
                            </div>
                            <div className='col col-2 img-divs'>
                                <img src='https://www.freeiconspng.com/uploads/pokeball-icon-20.jpg' alt='pokeball' className='img'/>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Header;