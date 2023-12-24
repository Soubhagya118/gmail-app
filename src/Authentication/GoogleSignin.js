import React from 'react';
import logo from '../assets/logo.png';

import { signInWithPopup } from 'firebase/auth';
import {auth,provider} from '../firebase/firebase';
import { Signin } from '../Redux/UserSlice';
import { useDispatch } from 'react-redux';

const GoogleSignin = () => {
const dispatch=useDispatch()

const googleAuthFn= ()=>{
// try{
//  let res = await signInWithPopup(auth,provider);
//  console.log("x",res)

//  dispatch(Signin({displayName:res?.user?.displayName,email:res?.user?.email,photoURL:res?.user?.photoURL}))
// }catch(err){

// }

signInWithPopup(auth,provider).then((user)=>{
  console.log("user",user.user);
    dispatch(Signin({displayName:user?.user?.displayName,email:user?.user?.email,photoURL:user?.user?.photoURL}))

})
}
 console.log("auth",auth);


  return (
    <div>
      <div className='w-96 h-96 p-10 items-center m-auto'>
        <img src={logo}/>
        <button className='bg-blue-400 p-2 w-full text-white' onClick={googleAuthFn}>Login with Google</button>
      </div>
    </div>
  )
}

export default GoogleSignin
