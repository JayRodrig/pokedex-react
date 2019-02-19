import React from 'react';
import './loadmore.css'

const LoadMore = props => {
    const clickHandler = e => {
        props.loadMorePkmn();
    }

    return(
        <>
        <div className='container no-border loadmore-container'>
            <div className='row'>
                <div className="card no-border col col-12" onClick={clickHandler}> {/* div tag for new card container per pokemon existing on the pokemon arr */}
                    <div className="loadmore-button" >  {/* div tag for name of pokemon per pokemon existing on the pokemon arr */}
                        <p className='loadmore-text'>LOAD MORE</p>
                    </div> {/* closing tag for div tag w pokemon name */}
                </div>
            </div>
        </div>
        </>
    )
}

export default LoadMore;