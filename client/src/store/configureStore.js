import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import sectionsReducers from '../reducers/sectionsReducers'
import subSectionReducers from '../reducers/subSectionReducers'
import categoriesReducers from '../reducers/categoriesReducers'
import videosReducers from '../reducers/videosReducers'
import usersReducers from '../reducers/usersReducers'
import commentsReducers from '../reducers/commentsReducers'
import linksReducers from '../reducers/linksReducers'

const configureStore = () => {
    const store = createStore(combineReducers({
        sections : sectionsReducers,
        subSections : subSectionReducers,
        categories : categoriesReducers,
        videos : videosReducers,
        comments : commentsReducers,
        users : usersReducers,
        link : linksReducers
    }), applyMiddleware(thunk))

    return store
}

export default configureStore