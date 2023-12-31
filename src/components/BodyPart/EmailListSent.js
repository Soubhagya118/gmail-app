import React, { useEffect, useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailType from './EmailType';
import EmailBody from './EmailBody';
import Compose from '../Compose';

import { db } from '../../firebase/firebase';
import { collection,onSnapshot } from "firebase/firestore"; 
import { useSelector ,useDispatch} from 'react-redux';
import {sentMailListReducer} from '../../Redux/MailSlice'


import axios from "axios"
const EmailListSent = () => {
   const [emails,setEmails]=useState([]);
  const sentMail = useSelector((state)=>state?.mail?.sentMailList);
  const countSentMails=sentMail?.length;
  var userMail = useSelector(state=>state?.user?.value);
console.log("usermail . email", userMail.email)
  // console.log("sent",sentMail)
  const dispatch = useDispatch();

  const getData = async(e)=>{
    try{
      console.log("hi")
      let x = await axios.get(`https://mail-dec-default-rtdb.firebaseio.com/sent-emails.json`)
       console.log("xtt from sent mail",x.data);
let dataa=x.data
      var storeData = [];
let usersFrom= userMail.email;
for(var key in dataa){
let dataValue= dataa[key]
  for(var k in dataValue){
    //console.log("k sent", dataValue[k].from)
   if(dataValue[k].from == userMail?.email){
    storeData.push({
      id:k,
      from:usersFrom,
      isChecked:dataValue[k]?.isChecked,
      subject:dataValue[k]?.subject,
      message:dataValue[k].message,
      to:dataValue[k].to,
      timestamp:dataValue[k].timestamp,
      time:new Date(dataValue[k].timestamp?.seconds*1000).toLocaleTimeString()

    })
  }
    // console.log("nested k",dataValue[k].isChecked)
  }
}
      
      // console.log("storedata from sent",storeData)
       dispatch(sentMailListReducer([...storeData]))
      
  }catch(err){
    console.log(err.message)
    }
    
  }
  useEffect(()=>{
      getData()
  },[])
console.log("sentMail",sentMail)
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
  <p>{countSentMails?countSentMails:'0'}</p>

  <IconButton>
        <ChevronLeftIcon/>
     
        <ChevronRightIcon/>
      </IconButton>

</div>
    </div>
    
    
    
    <EmailType/>

   {sentMail  ?[...sentMail]?.sort((a,b)=> (b?.timestamp?.seconds*1000) - (a?.timestamp?.seconds*1000))
   .map((email)=>     
    <EmailBody key={email?.id} 
    to={email?.to}
          id={email?.id} 
          from={email?.from}
          isChecked={email?.isChecked}
          //name={email?.to}
          subject={email?.subject} 
          timestamp={email?.timestamp} 
          time={new Date(email?.timestamp?.seconds*1000).toLocaleTimeString()} 
          message={email?.message} 
          fullTime={new Date(email?.timestamp?.seconds*1000).toLocaleString()}

      // id={email?.id} 
      // to={email?.to} isChecked={email?.isChecked} subject={email?.subject} 
      // time={new Date(email?.timestamp?.seconds*1000).toLocaleTimeString()}
      //  message={email?.message} 
      //  fullTime={new Date(email?.timestamp?.seconds*1000).toLocaleString()}

      />


):''} 
    <Compose/>
    </div>
  )
}

export default EmailListSent
