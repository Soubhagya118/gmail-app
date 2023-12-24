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


const EmailList = () => {
  const [emails,setEmails]=useState([]);

 

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
  <p>1-50 of 10,222</p>

  <IconButton>
        <ChevronLeftIcon/>
     
        <ChevronRightIcon/>
      </IconButton>

</div>
    </div>
    
    
    
    <EmailType/>
    {console.log("emailstry",emails)}

    {emails.length<=1?emails:[...emails].sort((a,b)=> (b?.data?.timestamp?.seconds*1000 - a?.data?.timestamp?.seconds*1000)).map((email)=>    
    <EmailBody key={email?.id} 
    id={email?.id} name={email.data?.to} subject={email?.data?.subject} time={new Date(email?.data?.timestamp?.seconds*1000).toLocaleTimeString()} message={email?.data?.message} fullTime={new Date(email?.data?.timestamp?.seconds*1000).toLocaleString()}
      
    />
)}
    <Compose/>
    </div>
  )
}

export default EmailList
