import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addDialogActionCreator, updateNewDialogTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    //обрабатываем добавление поста
    let addDialog = () => {
        props.store.dispatch(addDialogActionCreator());
    }

    //обрабатываем изменение textarea
    let onDialogChange = (text) => {
        props.store.dispatch(updateNewDialogTextActionCreator(text));
    }

    return <Dialogs
        updateNewDialogText={onDialogChange}
        sendMessage={addDialog}
        dialogsPage={state}
    />

}

export default DialogsContainer;