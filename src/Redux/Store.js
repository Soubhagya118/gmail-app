import { configureStore } from "@reduxjs/toolkit";
import MailSlice from "./MailSlice";
import UserSlice from "./UserSlice";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import {persistReducer, persistStore} from "redux-persist/es/persistReducer";

const presistConfig ={
    key :"root",
   storage: AsyncStorage
}
const Store = configureStore({
    reducer:{
        mail: MailSlice,
        user:UserSlice
    }
});


export default Store