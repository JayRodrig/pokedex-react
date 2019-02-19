import React from 'react';

const ProfileHeader = props => {
    const clickHandler = e => {
        props.backToHome();
    }

    return(
        <div className='row margin-side profile-header'>
            <div className='col col-3'>
                <span onClick={clickHandler}>Home</span> >> <span className='pkmnName-header'>{props.name}</span>
            </div>
        </div>
    )
}

export default ProfileHeader;