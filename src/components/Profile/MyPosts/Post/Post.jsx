import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return  (
        <div className={s.item}>
            <img src='https://boxideas.ru/wp-content/uploads/2019/02/777e5bb92bbd7ddfefef003330560f50.png' />
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;