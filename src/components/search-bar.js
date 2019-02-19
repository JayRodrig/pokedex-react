import React from 'react';
import PokeList from '../services/poke-list'
import './search-bar.css'

const SearchBar = props => {
    const clickHandler = e => {
        const queryResult = [];
        for (let i = 0; i < 5; i++){
            const pkmn = PokeList.PokemonList[i];
            if (pkmn.includes(e.target.value)) {
                queryResult.push(pkmn);                
            }
        }
        props.searchHandler(queryResult);
    }

    return(
        <>
            { (props.searchQuery.length > 0) ?
                <>
                    <input type='text' placeholder='Search...' className='input-field' onChange={clickHandler}/>
                    <div className='col col-8 dropdown-container'>
                        <ul className="list-group ul-props">
                            {
                                props.searchQuery.map((e, i) => {
                                    return (
                                        <li className="list-group-item dropdown li-props" key={i}>{e}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </>
                : <input type='text' placeholder='Search...' className='input-field' onChange={clickHandler}/>
            }
        </>
    )
}

export default SearchBar;