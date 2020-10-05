import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addDialogActionCreator, updateNewDialogTextActionCreator} from "../../Redux/state";

const Dialogs = (props) => {

    let DialogsElements = props.state.dialogs
            .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let MessagesElements = props.state.message
        .map((message) => <Message message={message.message} id={message.id}/>)

    let newDialogElement = React.createRef();

    //обрабатываем добавление поста
    let addDialog = () => {
        props.dispatch(addDialogActionCreator());
    }

    //обрабатываем изменение textarea
    let onDialogChange = () => {
        let text = newDialogElement.current.value;
        props.dispatch(updateNewDialogTextActionCreator());
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                <div>{MessagesElements}</div>
                <div>
                    <textarea ref={newDialogElement}
                              onChange={onDialogChange}
                              value={props.state.newDialogText}></textarea>
                </div>
                <div>
                    <button onClick={addDialog}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;