let RerenderEntireTree = () => {
    console.log('RerenderEntireTree change');
}

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    RerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    RerenderEntireTree(state);
}

export let addDialog = () => {
    let newDialog = {
        id: 7,
        message: state.dialogsPage.newDialogText,
    }
    state.dialogsPage.message.push(newDialog);
    state.dialogsPage.newDialogText = '';
    RerenderEntireTree(state);
}

export let updateNewDialogText = (newDialog) => {
    state.dialogsPage.newDialogText = newDialog;
    RerenderEntireTree(state);
}

export const subscripe = (observer) => {
    RerenderEntireTree = observer;
}

export default state;