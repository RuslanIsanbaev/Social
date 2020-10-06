const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
    switch(action.type ) {
        case ADD_DIALOG :
            let newDialog = {
                id: 7,
                message: state.newDialogText
            }
            state.messages.push(newDialog);
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_DIALOG_TEXT :
            state.newDialogText = action.newDialog;
            return state;
        default:
            return state;
    }

}

export const addDialogActionCreator = () => ({ type: ADD_DIALOG })

export const updateNewDialogTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_DIALOG_TEXT, newDialog: text })

export default dialogReducer;