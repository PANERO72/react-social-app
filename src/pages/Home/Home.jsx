import React from 'react';
import './Home.css';
import { useTranslation, Trans } from 'react-i18next';
import TopBar from '../../components/TopBar/TopBar';
import SideBar from '../../components/SideBar/SideBar';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';

import '../../i18n';

const Home = () => {
    const { t, i18n } = useTranslation();
    return (<>
        <TopBar />
        <div className='root'>
            <div className='homeContainer'>
                <SideBar />
                <Feed />
                <RightBar />
            </div>

            <h1>{t('welcome')}</h1>
        </div>
        </>
    );
};

export default Home;