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
            message: [
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
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubcriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubcriber(this._state);
        } else if (action.type === 'ADD-DIALOG'){
            let newDialog = {
                id: 7,
                message: this._state.dialogsPage.newDialogText,
            }
            this._state.dialogsPage.message.push(newDialog);
            this._state.dialogsPage.newDialogText = '';
            this._callSubcriber(this._state);
        } else if (action.type === 'UPDATE-NEW-DIALOG-TEXT'){
            this._state.dialogsPage.newDialogText = action.newDialog;
            this._callSubcriber(this._state);
        }
    }

}

export default store;