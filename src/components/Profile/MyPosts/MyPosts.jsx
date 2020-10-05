import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    //Выводим из state все посты
    let postsElement = props.posts
        .map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    //создаём ссылку на объект textarea для отслеживания
    let newPostElement = React.createRef();

    //обрабатываем добавление поста
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    //обрабатываем изменение textarea
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return  <div className={s.background}>
        <h3>My posts</h3>
    <div>
        <div>
            <textarea ref={newPostElement} onChange={onPostChange}
                      value={props.newPostText} className={s.textarea}></textarea>
        </div>
        <div>
            <button onClick={addPost} className={s.buttonPrimary}>Add post</button>
        </div>
    </div>
    <div className={s.posts}>
        {postsElement}
    </div>
    </div>
}

export default MyPosts;