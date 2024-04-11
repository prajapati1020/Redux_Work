import {configureStore} from '@reduxjs/toolkit'
//import {combineReducers} from 'redux'
import counterReducer from './counter'
import authReducer from './auth';



const store = configureStore({
    reducer: {
        counter:counterReducer,
        auth:authReducer,
    }
  })


export default store;
