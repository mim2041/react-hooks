import React from 'react';
import UserAvatar from '../components/UserAvatar';
import WithBorder from './WithBorder';

const UserWithBorder = WithBorder(UserAvatar);

const GameResult = () => {
    return (
        <div className='flex gap-12'>
            <UserAvatar imageURL={"https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}/>
            <UserWithBorder imageURL="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></UserWithBorder>
            <UserAvatar imageURL={"https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}/>
            <UserAvatar imageURL={"https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}/>
        </div>
    );
};

export default GameResult;