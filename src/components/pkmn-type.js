import React from 'react';

const PkmnType = props => {
    return(
        props.type.map((e, i) => {
            return(
                <button type="button" className="btn btn-secondary border pkmn-type" key={i}>{e}</button>
            )
        })
    )
}

export default PkmnType;