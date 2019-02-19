import React from 'react';
import './header.css'
import pokeball from '../assets/pokeball.png';
import SearchBar from './search-bar';

/*
    Header component - all the code that represents the top part of the web app is stored here.
*/

const Header = props => {    
    return(
        <>
            <div className='header'> {/* main container */}
                <div className='banner'></div> {/* red banner, top of the app */}
                <div className='container input-field-container'> {/* container for pokeballs, title and input field */}
                        <div className='row'> {/* bootstrap row, to organize everything in columns */}
                            <div className='col col-2 img-divs'> {/* div to hold the pokeball to the left */}
                                <img src={pokeball} alt='pokeball' className='img'/> {/* img tag referring to pokeball */}
                            </div> {/* closing tag left pokeball div */}
                            <div className='col col-8 center'> {/* div to hold both the page title and the input field */}
                                <h3 className='title'>Pursuit Pokedex</h3> {/* page title */}
                                 <SearchBar searchHandler={props.searchHandler} searchQuery={props.searchQuery}/> {/* input field */}
                            </div> {/* closing tag for page title and input field div */} 
                            <div className='col col-2 img-divs'> {/* div to hold the pokeball to the right */}
                                <img src={pokeball} alt='pokeball' className='img'/>
                            </div>{/* closing tag for right pokeball div */}
                        </div> {/* closing tag for bootstrap row */}
                </div> {/* closing tag for pokeball, page title and input field div */}
            </div> {/* closing tag for main container */}
        </>
    )
}

export default Header;