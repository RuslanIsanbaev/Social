import React from 'react';
import './index.css';
import state, {subscripe} from './Redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import App from '@lmui/core/containers/App';
import {addDialog, addPost, updateNewDialogText, updateNewPostText} from './Redux/state';
import {BrowserRouter} from "react-router-dom";

export let RerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addDialog={addDialog}
                    updateNewDialogText={updateNewDialogText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


RerenderEntireTree(state);

subscripe(RerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
