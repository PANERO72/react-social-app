import React from 'react';
import './SideBar.css';
import {
    RssFeed,
    Chat,
    PlayCircleFilled,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from '@material-ui/icons';
//import TopBar_module from '../top-bar/top-bar.module.scss';
import CloseFriends from '../CloseFriends/CloseFriends';
import { Users } from '../../dummyData';

import { useTranslation, Trans } from 'react-i18next';

const SideBar = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' /> Coffee
                    </li>
                    <li className='sidebarListItem'>
                        <Chat className='sidebarIcon' /> Tea
                    </li>
                    <li className='sidebarListItem'>
                        <PlayCircleFilled className='sidebarIcon' /> Milk
                    </li>
                    <li className='sidebarListItem'>
                        <Group className='sidebarIcon' /> Milk
                    </li>
                    <li className='sidebarListItem'>
                        <Bookmark className='sidebarIcon' /> Milk
                    </li>
                    <li className='sidebarListItem'>
                        <HelpOutline className='sidebarIcon' /> Milk
                    </li>
                    <li className='sidebarListItem'>
                        <WorkOutline className='sidebarIcon' /> Milk
                    </li>
                    <li className='sidebarListItem'>
                        <Event className='sidebarIcon' /> Milk
                    </li>
                    <li className='sidebarListItem'>
                        <School className='sidebarIcon' /> Milk
                    </li>
                </ul>
                <hr className='sidebarFriendsHr' />
                <button className='sidebarButton'>{t('sideBarButton')}</button>
                <ul className='sidebarFriendsList'>
                    {Users.map((u) => (
                        <CloseFriends key={u.id} user={u} />
                    ))}
                    
                </ul>
            </div>
        </div>
    );
};

export default SideBar;