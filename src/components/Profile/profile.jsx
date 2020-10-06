// @flow
import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return  <div className={s.background}>
        <ProfileInfo />
        <MyPostsContainer
            store={props.store}
        />
    </div>
}

export default Profile;