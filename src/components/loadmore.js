import React from 'react';
import './loadmore.css'

const LoadMore = props => {
    const clickHandler = e => {
        props.loadMorePkmn();
    }

    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 loadmore-button'>
                    <button onClick={clickHandler}>Load More</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoadMore;