import React from 'react';

const PkmnType = props => {
    return(
        props.type.map((e, i) => {
            return(
                <button type="button" className={`btn btn-secondary pkmn-type ${e}`} key={i}>{e.slice(0,1).toUpperCase() + e.slice(1)}</button>
            )
        })
    )
}

export default PkmnType;