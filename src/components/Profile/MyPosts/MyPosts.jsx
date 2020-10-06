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
    let onAddPost = () => {
        props.addPost();
    }

    //обрабатываем изменение textarea
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return  <div className={s.background}>
        <h3>My posts</h3>
    <div>
        <div>
            <textarea ref={newPostElement} onChange={onPostChange}
                      value={props.newPostText} className={s.textarea}></textarea>
        </div>
        <div>
            <button onClick={onAddPost} className={s.buttonPrimary}>Add post</button>
        </div>
    </div>
    <div className={s.posts}>
        {postsElement}
    </div>
    </div>
}

export default MyPosts;