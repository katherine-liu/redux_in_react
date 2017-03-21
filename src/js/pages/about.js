'use strict';

import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';

//const reducer = (initialState = 0, action) => {
//    if (action.type === 'INC') {
//        return initialState + 1;
//    } else if (action.type === 'DEC') {
//        return initialState - 1;
//    } else if (action.type === 'E') {
//        throw new Error('AAAA!!!!');
//    }
//    return initialState;
//}
//
//const logger = (store) => (next) => (action) => {
//    console.log('action fired', action);
//    next(action);
//}
//
//const error = (store) => (next) => (action) => {
//    try {
//        next(action);
//    } catch(e) {
//        console.log('AHHHH!!!!', e);
//    }
//}
//
//const middleware = applyMiddleware(logger, error);
//
//const store = createStore(reducer, 1, middleware)
//
//store.subscribe(() => {
//    console.log('store changed', store.getState());
//})
//
//store.dispatch({type: 'INC'});
//store.dispatch({type: 'INC'});
//store.dispatch({type: 'DEC'});
//store.dispatch({type: 'DEC'});
//store.dispatch({type: 'E'});

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_START': {
            return {...state, fetching: true}
            break;
        }
        case 'FETCH_USERS_ERROR': {
        return {...state, fetching: false, error: action.payload}
            break;
        }
        case 'RECEIVE_USERS': {
        return {...state, fetching: false, fetched: true, users: action.payload}
            break;
        }
    }
    return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

//store.dispatch((dispatch) => {
//    dispatch({type: 'FETCH_USERS_START'})
//    axios.get('http://rest.learncode.academy/api/wstern/users')
//        .then((response) => {
//            dispatch({type: 'RECEIVE_USERS', payload: response.data})
//        })
//        .catch((error) => {
//            dispatch({type: 'FETCH_USERS_ERROR', payload: error})
//        })
//})

store.dispatch({
    type: 'FETCH_USER',
    payload: axios.get('http://rest.learncode.academy/api/wstern/users'),
})

class About extends Component {
  render() {
    return(
      <h2>About Redux...</h2>
    );
  }
}

export {About as default};
