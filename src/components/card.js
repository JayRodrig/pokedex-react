import React from 'react';
import './card.css';

/* Card component, this is where each one of the lines containing pokemon info is created */

const Card = props => {
    const clickHandler = e => {
        const pkmnName = e.currentTarget.title;
        props.viewToggle(pkmnName);
    }

    if (props.pokemon.pokemon.pokemon.length < 1) {
        return <h1>Loading...</h1>
    } else {
        return props.pokemon.pokemon.pokemon.map((pokemon, index ) => {          /* we are returning a new arr using the map method on the pokemon arr */
            return (    
                <div className="card poke-card col col-12" key={index} title={pokemon} onClick={clickHandler}> {/* div tag for new card container per pokemon existing on the pokemon arr */}
                    <div>
                        {/* <img className="poke-img" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' alt='pokemon'/> */}
                        <img className="poke-img" src={`https://img.pokemondb.net/sprites/sun-moon/icon/${pokemon}.png`} alt='pokemon'/>
                    </div>
                    <div className="card-body" >  {/* div tag for name of pokemon per pokemon existing on the pokemon arr */}
                        {pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}  {/* this is where we actually take the pokemon name off the pokemon arr and insert it to our html and capitalize the 1st letter*/}
                    </div> {/* closing tag for div tag w pokemon name */}
                    <div className="poke-num"> {/* div tag for pokemon number  */}
                       # {props.pokemon.pokemon.id[index]}
                    </div>
                </div>  /* closing div tag for card container */
            ) 
        });
    }   
}

export default Card;