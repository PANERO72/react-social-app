import React from 'react';
import './Profile.css';
import TopBar from '../../components/TopBar/TopBar';
import SideBar from '../../components/SideBar/SideBar';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';
import PostImage from '../../assets/img/post/8.jpeg';
import UserImage from '../../assets/img/persons/8.jpeg';

import { useTranslation, Trans } from 'react-i18next';

const Profile = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <TopBar />
            <div className='profile'>
                <SideBar />
                <div className='profileRightSide'>
                    <div className='profileRightTop'>
                        <div className='profileImagesContainer'>
                            <img className='profileCoverImage' src={PostImage} alt={t('altPostImage')} />
                            <img src={UserImage} className='profileUserImage' alt={t('altUserImage')} />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileUserName'>José Panero</h4>
                            <span className='profileUserDesc'>Posk msmsj jsjskk ks</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;