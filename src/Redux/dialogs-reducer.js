const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

const dialogReducer = (state, action) => {
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