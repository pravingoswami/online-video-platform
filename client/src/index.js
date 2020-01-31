import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import configureStore from './store/configureStore'

import {Provider} from 'react-redux'

import {startGetCategories} from './actions/categoriesAction'
import {startGetComments} from './actions/commentsAction'
import {startGetSection} from './actions/sectionsAction'
import {startGetSubSection} from './actions/subSectionsAction'
import {startGetUser} from './actions/usersAction'
import {startGetVideos} from './actions/videosAction'

const store = configureStore()

store.subscribe( () => {
    return console.log(store.getState())
} )

store.dispatch(startGetCategories())
store.dispatch(startGetComments())
store.dispatch(startGetSection())
store.dispatch(startGetSubSection())
store.dispatch(startGetUser())
store.dispatch(startGetVideos())

console.log(store.getState())

const jsx = (
    <Provider store = {store} >
        <App />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
