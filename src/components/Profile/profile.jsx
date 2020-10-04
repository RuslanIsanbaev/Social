// @flow
import React from 'react';
import s from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";

const Profile = (props) => {

    return  <div className={s.background}>
        <ProfileInfo />
        <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
        />
    </div>
}

export default Profile;