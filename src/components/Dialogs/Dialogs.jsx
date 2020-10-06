import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addDialogActionCreator, updateNewDialogTextActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newDialogText = state.newDialogText;

    let newDialogElement = React.createRef();

    //обрабатываем добавление поста
    let addDialog = () => {
        props.sendMessage();
    }

    //обрабатываем изменение textarea
    let onDialogChange = () => {
        let text = newDialogElement.current.value;
        props.updateNewDialogText(text);
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
                              placeholder="Enter your message"
                              value={newDialogText}></textarea>
                </div>
                <div>
                    <button onClick={addDialog}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;