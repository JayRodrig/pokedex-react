import React from 'react';

const PkmnStats = props => {
    console.log(props)
    return(
        <>
            <div className='col col-2 inline stat-container'>
                <div className='col col-2 stat-name hp-stat'>{(props.stats.length > 1) ? props.stats[5].name.slice(0,1).toUpperCase() + props.stats[5].name.slice(1) : 'Loading...'}</div>
                <div className='col col-2 stat-value'>
                    <span>{(props.stats.length > 1) ? props.stats[5].value : 'Loading...'}</span>
                </div>
            </div>
            <div className='col col-2 inline stat-container'>
                <div className='col col-2 stat-name'>{(props.stats.length > 1) ? props.stats[4].name.slice(0,1).toUpperCase() + props.stats[4].name.slice(1) : 'Loading...'}</div>
                <div className='col col-2 stat-value attack-stat'>
                    <span>{(props.stats.length > 1) ? props.stats[4].value : 'Loading...'}</span>
                </div>
            </div>
            <div className='col col-2 inline stat-container'>
                <div className='col col-2 stat-name'>{(props.stats.length > 1) ? props.stats[3].name.slice(0,1).toUpperCase() + props.stats[3].name.slice(1) : 'Loading...'}</div>
                <div className='col col-2 stat-value defense-stat'>
                    <span>{(props.stats.length > 1) ? props.stats[3].value : 'Loading...'}</span>
                </div>
            </div>
            <div className='col col-2 inline stat-container'>
                <div className='col col-2 stat-name'>Sp.Attack</div>
                <div className='col col-2 stat-value spattack-stat'>
                    <span>{(props.stats.length > 1) ? props.stats[2].value : 'Loading...'}</span>
                </div>
            </div>
            <div className='col col-2 inline stat-container'>
                <div className='col col-2 stat-name'>Sp.Defense</div>
                <div className='col col-2 stat-value spdefense-stat'>
                    <span>{(props.stats.length > 1) ? props.stats[1].value : 'Loading...'}</span>
                </div>
            </div>
            <div className='col col-2 inline stat-container'>
                <div className='col col-2 stat-name'>{(props.stats.length > 1) ? props.stats[0].name.slice(0,1).toUpperCase() + props.stats[0].name.slice(1) : 'Loading...'}</div>
                <div className='col col-2 stat-value speed-stat'>
                    <span>{(props.stats.length > 1) ? props.stats[0].value : 'Loading...'}</span>
                </div>
            </div>
        </>
    )
}

export default PkmnStats;