import React from 'react'
import logo from '../assets/logo.png';
import {auth,provider} from '../firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import Signin  from './SignIn';
import {Routes, Route,Link,} from "react-router-dom";

import SignUp from './SignUp';


const Login = () => {
    const dispatch = useDispatch();

   
  return (
    <>
    <Routes>
    <Route path="/" exact element={<SignUp/>} />

    <Route path="/signin"   element={<Signin/>} />


    </Routes>
     
    </>
  )
}

export default Login
