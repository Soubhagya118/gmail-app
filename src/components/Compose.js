import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import './Compose.css';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../Redux/MailSlice';
import { useSelector } from 'react-redux';
import axios from 'axios'

import {db} from '../firebase/firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { Timestamp, } from "firebase/firestore";

const Compose = () => {
const [to,setTo]= useState("");
const [subject,setSubject]= useState("");
const [message,setMessage]= useState("");
const mygmailData= useSelector(state=>state.user.value);
const fromName =mygmailData?.displayName;
const from=mygmailData?.email
const inboxMail = useSelector(state=>state.user.value);

const formSubmit=async(e)=>{

  e.preventDefault();
  const data={
    to:to,
    from:inboxMail.email,
     fromName:inboxMail?.name,
    subject:subject,
    message:message,
    timestamp: Timestamp.fromDate(new Date()),
    isChecked:false,
    // id:  Math.random().toString(36).substr(2, 9)
  }
  //alert(data.id)
  console.log("to",to)
  const senderMail = to.replace(/[.]/g, "");

  // console.log(data)

  try{
let x = await axios.post(`https://mail-dec-default-rtdb.firebaseio.com/sent-emails/${senderMail}.json`,{
  ...data
});
console.log("x compose data",x)
alert("data sent successfully")
dispatch(closeSendMessage())
setTo("");
setMessage("");
setSubject("")
  }catch(error){
    const { data } = error.response;
    alert("err",data.error.message)
    console.log(data.error.message);

  }
  //alert(`to ${to} sub ${subject} msg ${message}`);
  
  // const emails=await addDoc(collection(db, "emails"),{
  //   to:to,
  //   from:from,
  //   fromName:fromName,
  //   subject:subject,
  //   message:message,
  //    timestamp: Timestamp.fromDate(new Date())
  // })
 
}

  const dispatch = useDispatch();
const isComposeOpen = useSelector(state=>state.mail.sendMessageIsOpen)
  return (<>
   {isComposeOpen && <div className='compose'>
      <div className='compose__header'>
        <div className='compose_header_left'>
        <span>New messages</span>
        </div>
        <div className='compose__header__right'>
        <RemoveIcon />
        <HeightIcon/>
        <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
        </div>
      </div>

      {/* =======================================body ================================== */}
<form onSubmit={formSubmit}>
      <div className='compose__body'>
        <div className='compose__bodyForm'>
    <input type="email" placeholder='Reciepents' value={to} onChange={(e)=>setTo(e.target.value)} required/>

    <input type="text" placeholder='Subject'  value={subject} onChange={(e)=>setSubject(e.target.value)} required/>

<textarea rows='20'  value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
        </div>
      </div>
{/* ==========================================footer============================== */}
      <div className='compose__footer'>

        <div className='compose__footerLeft'>
            <button type="submit" >
               send <ArrowDropDownIcon/>
            </button>
        </div>

        <div className='compose__footerRight'>

<FormatColorTextIcon/>
<AttachFileIcon/>

<LinkIcon/>
<InsertEmoticonIcon/>
<NoteAddIcon/>
<PhotoIcon/>
<PhonelinkIcon/>
<CreateIcon/>
<MoreVertIcon/>
<DeleteIcon/>
        </div>

      </div>
</form>

    </div>
    }</>
  )
}

export default Compose
