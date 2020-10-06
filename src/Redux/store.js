import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'It\'s my first post', likeCount: 11}
            ],
            newPostText: 'newPostText'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Vitya'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Tolya'},
                {id: 6, name: 'Igor'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newDialogText: 'newDialogText'
        },
        siteBar:{
            friends: [
                {id: 1, avatar: '', name: 'Dima'},
                {id: 1, avatar: '', name: 'Sasha'},
                {id: 1, avatar: '', name: 'Vitya'}
            ]

        }
    },
    _callSubcriber()  {
        console.log('callSubcriber change');
    },

    getState(){
        return this._state;
    },
    subscripe(observer) {
        this._callSubcriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubcriber(this._state);
    }
}

export default store;