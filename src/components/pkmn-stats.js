import React from 'react';

const PkmnStats = props => {
    return(
        props.stats.map((e, i) => {
            return <div className='col col-2 inline border'>
                <div className='col col-2'>{e.name}</div>
                <div className='col col-2'>{e.value}</div>
            </div>
        })
    )
}

export default PkmnStats;