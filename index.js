/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider}from 'react-redux'
import {applyMiddleware, createStore}from 'redux'
import rootReducer from './Src/Redux/Reducer/index'
import React from 'react'
import thunk from 'redux-thunk'

const store= createStore(rootReducer,applyMiddleware(thunk))

const index =()=>{
    return <Provider store={store}>

        <App/>
    </Provider>
}

AppRegistry.registerComponent(appName, () => index);
