import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './Post.css';
import { MoreVert } from '@material-ui/icons';
// import PostProfileImg from '../../assets/img/persons/4.jpeg';
// import PostImage from '../../assets/img/post/1.jpeg';
import LikeIcon from '../../assets/img/like.png';
import HeartIcon from '../../assets/img/heart.png';

import {Users} from '../../dummyData';

const Post = ({post}) => {
    const { t, i18n } = useTranslation();
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = () =>{
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} className='postProfileImg' alt={t('altProfileImage')} />
                        <span className='postUserName'>
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        {/* <span className='postDate'>hace 10 minutos</span> */}
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>
                        {/* Mi primer post :) */}
                        {post.desc}
                    </span>
                    <img src={post.photo} alt={t('altPostImage')} className='postImage' />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img src={LikeIcon} alt={t('altIonImage')} className='postLikeIcon' onClick={likeHandler} />
                        <img src={HeartIcon} alt={t('altIonImage')} className='postHartIcon' onClick={likeHandler} />
                        <span className='postCounterLikes'>{t('postToPersons')} {like} {t('postPersonsLike')}</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentsText'>{post.comment} {t('postComments')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;