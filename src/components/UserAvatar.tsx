import React from 'react';

const UserAvatar = ({imageURL}) => {
    return (
        <div>
            <img src={imageURL} alt="" className='w-36 rounded-full '/>
        </div>
    );
};

export default UserAvatar;