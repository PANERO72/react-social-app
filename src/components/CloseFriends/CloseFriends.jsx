import React from 'react';
import './CloseFriends.css';
// import FriendImage from '../../assets/img/persons/2.jpeg';
import { useTranslation, Trans } from 'react-i18next';

const CloseFriends = ({user}) => {
    const { t, i18n } = useTranslation();

    return (<>
        <li className='sidebarFriendsItem'>
            <img src={user.profilePicture} className='sidebarFriendsListImage' alt={t('altFriendImage')} />
            <span>{user.username}</span>
        </li>       
    </>);
};

export default CloseFriends;