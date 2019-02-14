import React from 'react';

const PkmnMoves = props => {
    return (
        props.moves.map((e, i) => {
            return <button type="button" className="btn button-moves btn-light" key={i}>{e.slice(0,1).toUpperCase() + e.slice(1)}</button>
        })
    )
}

export default PkmnMoves;