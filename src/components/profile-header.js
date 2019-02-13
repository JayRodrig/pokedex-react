import React from 'react';

const ProfileHeader = props => {
    return(
        <div className='row margin-side border'>
            <div className='col col-3'>
                Home >> {props.name}
            </div>
        </div>
    )
}

export default ProfileHeader;