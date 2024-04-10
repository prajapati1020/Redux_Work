import {configureStore,createSlice} from '@reduxjs/toolkit'
//import {combineReducers} from 'redux'

const intialState ={counter:0,showCounter:true};
const counterSlice =createSlice({
    name:'counter',//any name you can give
    initialState:intialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
             state.counter = state.counter+action.payload;
        },
        toggleCounter(state){
            state.showCounter =!state.showCounter
            
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
  })
export const counterActions = counterSlice.actions;
export default store;
