import React, { useState } from 'react'
import '../SidebarOptions.css';
import axios from "axios";
import {InboxMailListReducer} from '../../Redux/MailSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Inbox = ({Icon,title,number,isactive}) => {
const [emails,setEmails] = useState();
    const inboxMail = useSelector(state=>state?.user?.value);
const dispatch = useDispatch();
const navigate = useNavigate();

    const InboxFnHandler=async(e)=>{
        e.preventDefault();
        
        navigate('/')
        }
        

  return (
    <div className={`sidebarOption ${isactive && 'sidebarOptions--active'}`} onClick={InboxFnHandler}>
      <Icon/>
      <h2>{title}</h2>
      {/* <p>{number}</p> */}
    </div>
  )
}

export default Inbox
