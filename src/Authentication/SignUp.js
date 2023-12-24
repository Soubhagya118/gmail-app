import React, { useRef } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,NavLink } from 'react-router-dom';
import gmailLogo from '../assets/logo.png';



const authUrl='https://identitytoolkit.googleapis.com/v1/accounts:';
const api='AIzaSyD_66W2edDBsPdwbZ0MY4awi3eSitIi4qU';


const SignUp = () => {

const navigate=useNavigate();

    const inputEmail=useRef();
    const inputPass=useRef();
    const inputConPass=useRef();
    const inputName=useRef()

    const submitHandler=(e)=>{
        e.preventDefault();


        const email=inputEmail.current.value;
        const pass= inputPass.current.value;
        const conPass= inputConPass.current.value;
        const name=inputName.current.value;
  if(pass===conPass){  
     if(email.length>=16){
// dispatch(showNotificationMessage({title:'Loading!',status:'Pending!'}))    
fetch(`${authUrl}signUp?key=${api}`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        email:email,
        password:pass,
        displayName:name,
        returnSecureToken:true
    })
}).then(res=>{

  if(!res.ok){
   // toast.error("Bad request");
   console.log("res",res)
    throw new Error("Bad request")
  }
  return res.json()
})
    .then(data=>{
      
        console.log("signup data",data);
        toast.success("SignUp successfull")
        setTimeout(()=>navigate('/signin'),1000)
       // dispatch(showNotificationMessage({title:'Fulfilled!',status:'Sucess!'}))    

    }).catch(err=>{
        console.log("error",err);
        toast.error(err.message)
      //  dispatch(showNotificationMessage({title:'Error!',status:'Error!'}))    

    })

  }else{
    toast.error("your email must have 6 element except '@gmail.com'")
  }
  }else{
    toast.error("password and confirm password should be same")
  }

    }
  return (<>
    <div className='w-64 m-auto my-32 grid gap-4'>
    <section className='border-2 border-black-300 p-5 shadow-xl'>
    <div className='flex justify-evenly'>
    <img src={gmailLogo}  className='h-12'/>
    <h1 className='my-4 text-center text-2xl text-blue-700 font-bold'>SignUp</h1>

    </div>
  
    <form onSubmit={submitHandler} className='grid gap-2'>
    <input className='border-2 border-black-300 p-1 rounded-md' type='text' placeholder='User Name' ref={inputName} required/>
        <input  className='border-2 border-black-300 p-1 rounded-md' type='email' placeholder='Email' ref={inputEmail}   data-testid="input-field" required/>
        <input className='border-2 border-black-300 p-1 rounded-md' type='password' placeholder='Password' ref={inputPass} required/>
        <input className='border-2 border-black-300 p-1 rounded-md' type='password' placeholder='Confirm Password' ref={inputConPass} required/>
        <button className='border-2 border-blue-700 mt-3 rounded-lg text-white bg-blue-700 p-1'>Sign up</button>
      </form>
    </section>
     <section>
        <div className='border-2 border-black-600 p-2 rounded-lg text-center bg-green-100 shadow-xl'>Have an account? <NavLink to='/signin'>Login</NavLink> </div>
     </section>
    </div>
    <ToastContainer autoClose={2000}/></>
  )
}

export default SignUp
