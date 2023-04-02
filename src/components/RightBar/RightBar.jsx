import React from 'react';
import './RightBar.css';
import GiftImage from '../../assets/img/gift.png';
import AdImage from '../../assets/img/ad.png';
import OnlineUsers from '../OnlineUsers/OnlineUsers';
import { useTranslation, Trans } from 'react-i18next';
import {Users} from '../../dummyData';
import UserImage from '../../assets/img/persons/10.jpeg';

const RightBar = ({profile}) => {
    const { t, i18n } = useTranslation();

    const HomeRightBar = () => {
        return (
            <>
                <div className='birthdayContainer'>
                    <img src={GiftImage} className='birthdayImage' alt={t('birthdayImageAltText')} />
                    <span className='birthdayText'>
                        <Trans i18nKey={'birthdayText'}>
                            {/* <strong>José Panero</strong> y <strong>otros 3 amigos</strong> cumplen años hoy */}
                        </Trans>
                        
                    </span>
                </div>
                <img src={AdImage} className='rightbarAddImage' alt={'Imagen del Anuncio'} />
                <h4 className='rightbarFriendsTitle'>{t('rightbarFriendsTitle')}</h4>
                <ul className='rightbarFriendsList'>
                    {Users.map((u) => (
                        <OnlineUsers key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className='rightbarUserTitle'>{t('rightbarUserTitle')}</h4>
                <div className='rightbarUserInfoContainer'>
                    <div className='rightbarUserInfoItem'>
                        <span className="rightbarUserInfoKey">Ciudad:</span>
                        <span className="rightbarUserInfoValue">New York</span>
                    </div>
                    <div className='rightbarUserInfoItem'>
                        <span className="rightbarUserInfoKey">De:</span>
                        <span className="rightbarUserInfoValue">Barcelona</span>
                    </div>
                    <div className='rightbarUserInfoItem'>
                        <span className="rightbarUserInfoKey">Estado Civil:</span>
                        <span className="rightbarUserInfoValue">Soltero</span>
                    </div>
                </div>
                <h4 className='rightbarUserFriendsTitle'>{t('rightbarUserFriendsTitle')}</h4>
                <div className='rightbarFollowings'>
                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImage' src={UserImage} alt={t('altUserImage')} />
                        <span className='rightbarFollowingName'>Juan Otero</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImage' src={UserImage} alt={t('altUserImage')} />
                        <span className='rightbarFollowingName'>Alex Otero</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImage' src={UserImage} alt={t('altUserImage')} />
                        <span className='rightbarFollowingName'>Tomás Otero</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImage' src={UserImage} alt={t('altUserImage')} />
                        <span className='rightbarFollowingName'>Ángles Otero</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImage' src={UserImage} alt={t('altUserImage')} />
                        <span className='rightbarFollowingName'>Loli Otero</span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                {profile ? <ProfileRightBar></ProfileRightBar> : <HomeRightBar></HomeRightBar>}
            </div>
        </div>
    );
};

export default RightBar;