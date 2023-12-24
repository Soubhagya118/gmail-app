import { createSlice } from "@reduxjs/toolkit";

const userData = localStorage.getItem('userDetails') != null ?JSON.parse(localStorage.getItem('userDetails')):null 

export const userSlice = createSlice({
    name:'user',
    initialState:{
        value:userData,
    },
    reducers:{
        Signin:(state,action)=>{
            state.value= action.payload
        },
        Signout:(state)=>{

        },
        userDetails:(state,action)=>{
            state.value=action.payload;
           localStorage.setItem('userDetails', JSON.stringify(state.value));
        }
    }
});

export const {Signin,Signout,userDetails } = userSlice.actions;
export default userSlice.reducer