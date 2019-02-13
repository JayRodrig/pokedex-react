import React from 'react';

const PkmnMoves = props => {
    return (
        props.moves.map((e, i) => {
            return <div className='col col-4 inline' key={i}>{e}</div>
        })
    )
}

export default PkmnMoves;