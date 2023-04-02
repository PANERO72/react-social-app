import React from 'react';
import './OnlineUsers.css';
// import ProflieImage from '../../assets/img/persons/6.jpeg';
import { useTranslation, Trans } from 'react-i18next';
const OnlineUsers = ({user}) => {
    const { t, i18n } = useTranslation();
    return (<>
        <li className='rightbarFriendsListItem'>
            <div className='rightbarFriendsImageContainer'>
                <img src={user.profilePicture} className='rightbarFriendsImage' alt={t('altProfileImage')} />
                <span className='rightbarFriendsOnlineStatus'></span>
            </div>
            <span className='rightbarFriendsUsername'>{user.username}</span>
        </li>       
    </>);
};

export default OnlineUsers;