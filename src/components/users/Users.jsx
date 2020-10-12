import React from "react";
import styles from "./users.module.css"
import * as axios from 'axios';
import userPhoto from '../../assets/images/no_photo.png'

//Классовая компонента
class Users extends React.Component {

    constructor(props) {
        super(props);
        //запрос на сервер
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    getUsers = () => {
        if (this.props.users.length === 0) { //проверка что данных до этого не было, чтобы не вызывать постоянный цикл
            //запрос на сервер
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={
                            // устанавливаем аватар, если его нет, ставим заглушку
                            u.photos.small != null ? u.photos.small : userPhoto
                        } className={styles.usersPhoto}/>
                    </div>
                    <div>
                        { u.followed //проверяем, стэйт follow и утанавливаем эго состояние
                            ? <button onClick={() => { this.props.unFollow(u.id) }} >Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }} >Follow</button> }

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;