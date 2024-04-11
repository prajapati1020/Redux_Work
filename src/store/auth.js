import {createSlice} from '@reduxjs/toolkit'

const initalAuthState = {
    isAuthenticated:false
}


const authSlice =createSlice({
    name:'authentication',
    initialState: initalAuthState,
    reducers:{
        login(state){
            console.log("was here login")
            state.isAuthenticated =true

        },
        logOut(state){
            state.isAuthenticated =false

        }
    }
})
export const authActions = authSlice.actions;
export default authSlice.reducer;