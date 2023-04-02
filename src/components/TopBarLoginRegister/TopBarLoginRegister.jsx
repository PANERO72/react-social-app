import React from 'react';
import './TopBarLoginRegister.css';

import { useTranslation, Trans } from 'react-i18next';

import userImage from '../../assets/img/persons/1.jpeg';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

const TopBarLoginRegister = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='topBarLoginRegister'>
            <div className='topBarLoginRegisterLeft'>
                <span className='logo'>LamaSocial</span>
            </div>
            <div className='topBarLoginRegisterLanguageSwitchContainer'>
                <LanguageSwitch></LanguageSwitch>
            </div>
        </div>
    );
};

export default TopBarLoginRegister;