import React from 'react';
import {addDialogActionCreator, updateNewDialogTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewDialogText: (text) => {dispatch(updateNewDialogTextActionCreator(text));},
        sendMessage: () => {dispatch(addDialogActionCreator());}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;