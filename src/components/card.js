import React from 'react';
import './card.css';

/* Card component, this is where each one of the lines containing pokemon info is created */

const Card = props => {
    return props.pokemon.map((pokemon, index) => {          /* we are returning a new arr using the map method on the pokemon arr */
        return (    
            <div className="card poke-card" key={index}> {/* div tag for new card container per pokemon existing on the pokemon arr */}
                <div className="card-body">  {/* div tag for name of pokemon per pokemon existing on the pokemon arr */}
                    {pokemon.name}  {/* this is where we actually take the pokemon name off the pokemon arr and insert it to our html */}
                </div> {/* closing tag for div tag w pokemon name */}
            </div>  /* closing div tag for card container */
        ) 
    });
}

export default Card;