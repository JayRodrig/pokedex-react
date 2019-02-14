import React from 'react';

const PkmnMoves = props => {
    const clickHandler = e => {
        console.log('you got a move')
        console.log(e.target.innerHTML.toLowerCase());
        console.log(props);
        props.toggle();
        props.moveInfo(e.target.innerHTML.toLowerCase());
    }

    return (
        props.moves.map((e, i) => {
            return <button type="button" className="btn button-moves btn-light" key={i} onClick={clickHandler} data-toggle="modal" data-target="#exampleModalCenter">
                {e.slice(0,1).toUpperCase() + e.slice(1)}
            </button>
        })
    )
}

export default PkmnMoves;