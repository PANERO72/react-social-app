import React from 'react';
import './Share.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import ImageProfile from '../../assets/img/persons/3.jpeg';
import { useTranslation, Trans } from 'react-i18next';

const Share = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img src={ImageProfile} alt={t('profileImageAltText')} className='shareProfileImage' />
                    <input type={'text'} placeholder={t('shareInputPlaceholder')} className='shareInput' />
                </div>
            </div>
            <hr className='shareHr' />
            <div className='shareBottom'>
                <div className='shareOptions'>
                    <div className='shareOptionItem'>
                        <PermMedia htmlColor="tomato" className='shareOptionIcon' />
                        <span className='shareOptionItemText'>{t('shareOptionPhotoText')}</span>
                    </div>
                    <div className='shareOptionItem'>
                        <Label className='shareOptionIcon' htmlColor={'blue'} />
                        <span className='shareOptionItemText'>{t('shareOptionTagText')}</span>
                    </div>
                    <div className='shareOptionItem'>
                        <Room className='shareOptionIcon' htmlColor={'green'} />
                        <span className='shareOptionItemText'>{t('shareOptionLocationText')}</span>
                    </div>
                    <div className='shareOptionItem'>
                        <EmojiEmotions className='shareOptionIcon' htmlColor={'goldenrod'} />
                        <span className='shareOptionItemText'>{t('shareOptionFeelingsText')}</span>
                    </div>
                    <button className='shareButton'>{t('shareButton')}</button>
                </div>
            </div>
        </div>
    );
};

export default Share;