import React from 'react';
import './TopBar.css';
// import SearchIcon from '@material-ui/icons/Search';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { useTranslation, Trans } from 'react-i18next';

import userImage from '../../assets/img/persons/1.jpeg';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

const TopBar = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='topBar'>
            <div className='topBarLeft'>
                <span className='logo'>LamaSocial</span>
            </div>
            <div className='topBarCenter'>
                <div className='searchbar'>
                    <input type={'search'} placeholder={t('topBarInptPlaceholder')} className='searchInput' />
                    <Search className='searchIcon'></Search>
                </div>
            </div>
            <div className='topBarRight'>
                <div className='topBarLinks'>
                    <span className='topBarLink'>{t('homeLink')}</span>
                    <span className='topBarLink'>{t('timelineLink')}</span>
                </div>
                <div className='topBarIcons'>
                    <div className='topBarIconItem'>
                        <Person />
                        <span className='topBarIconBagde'>1</span>
                    </div>
                    <div className='topBarIconItem'>
                        <Chat />
                        <span className='topBarIconBagde'>1</span>
                    </div>
                    <div className='topBarIconItem'>
                        <Notifications />
                        <span className='topBarIconBagde'>1</span>
                    </div>
                </div>
                <div className='topBarImageContainer'>
                    <img src={userImage} className='topBarImage' alt={t('profileImageAltText')} />
                </div>
                <div className='topBarLanguageSwitchContainer'>
                    <LanguageSwitch></LanguageSwitch>
                </div>
            </div>
        </div>
    );
};

export default TopBar;