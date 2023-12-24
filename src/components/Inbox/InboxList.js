import React, { useEffect, useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailType from '../BodyPart/EmailType';
import InboxBody from './InboxBody';
import Compose from '../Compose';

import { db } from '../../firebase/firebase';
import { collection,onSnapshot } from "firebase/firestore"; 
import { useSelector ,useDispatch} from 'react-redux';
import {inboxDataReducer} from '../../Redux/MailSlice'


import axios from "axios"

const InboxList = () => {
   const [emails,setEmails]=useState([]);
  const rcvMail = useSelector(state=>state.mail?.inboxDetails);
  console.log("inbox data from redux",rcvMail)
  const dispatch = useDispatch();
  const inboxMail = useSelector(state=>state?.user?.value);
const countMSG=rcvMail?.length
  const getData=async(e)=>{

    let name= inboxMail?.email
    let namee=name.replace(/[.]/g, "")
    try{
      let x = await axios.get(`https://mail-dec-default-rtdb.firebaseio.com/sent-emails/${namee}.json`);
      //console.log("xtt inbox",x.data);
      let data=x.data;
     // console.log("data from inbox",x.data)
      var keys = [];

      for (var key in data) {
          keys.push({
              // user:key,
              to:data[key].to,
              from:data[key]?.from,
              id:key,
              isChecked:data[key].isChecked,
              message:data[key].message,
              subject:data[key].subject,
              timestamp:data[key].timestamp
          });
        
      }
      //console.log("keys from inbox",keys)
      dispatch(inboxDataReducer([...keys]))
      
  }catch(err){
    console.log(err.message)
    }
    
  }
  useEffect(()=>{
getData()
  },[rcvMail])
console.log("rcvMail",rcvMail)
  return (
  <div className='w-full'>
    <div  className='w-11/12 flex justify-between sticky border-b-2 h-14 border-b-black  items-center'>
    {/* ================================================= */}
    {/*                         Left Part                 */}
    {/* ================================================= */}
      <div className='text-sm'>
     <IconButton className=''>
        <CheckBoxOutlineBlankIcon/>
      </IconButton>
      <IconButton>
        <ArrowDropDownIcon/>
      </IconButton>
      <IconButton>
        <RefreshIcon/>
      </IconButton>
      <IconButton>
        <MoreVertIcon/>
      </IconButton>
      </div>


      {/* ================================================= */}
    {/*                        Right Part                */}
    {/* ================================================= */}

<div className='flex items-center'>
  <p>{countMSG?countMSG:'0'}</p>

  <IconButton>
        <ChevronLeftIcon/>
     
        <ChevronRightIcon/>
      </IconButton>

</div>
    </div>
    
    
    
    <EmailType/>

   {rcvMail ?([...rcvMail]?.sort((a,b)=> (b?.timestamp?.seconds*1000) - (a?.timestamp?.seconds*1000)))
   .map((email)=>  
    <InboxBody
      key={email?.id}
      // {...email}

      id={email?.id} 
      from={email?.from} 
      isChecked={email?.isChecked}
      to={email?.to} 
      subject={email?.subject} 
      timestamp={email?.timestamp} 
      time={new Date(email?.timestamp?.seconds*1000).toLocaleTimeString()}
      message={email?.message} 
      fullTime={new Date(email?.timestamp?.seconds*1000).toLocaleString()}

      />


):'' }
    <Compose/>
    </div>
  )
}

export default InboxList
