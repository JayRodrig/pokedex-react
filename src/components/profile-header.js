import React from 'react';

const ProfileHeader = props => {
    return(
        <div className='row margin-side profile-header'>
            <div className='col col-3'>
                Home >> <span className='pkmnName-header'>{props.name}</span>
            </div>
        </div>
    )
}

export default ProfileHeader;