import React from 'react';
import Card from './card';
import './list.css';

/* List Component, this is where all the pokemon cards will be held */

const List = props => {
    return(
        <div className='container list-container'> {/* div tag for list container*/}
            <div className='row'>   {/* div tag for bootstrap row */}
                <Card pokemon={props} viewToggle={props.viewToggle}/> {/* reference to the card container -> ./card.js | these are all the cards*/}
            </div> {/* closing div tag for bootstrap row */}
        </div> /* closing div tag for list container */
    )
}

export default List;