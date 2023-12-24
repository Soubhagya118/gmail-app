import React, { useState } from 'react'
import '../SidebarOptions.css';
import axios from "axios";
import {sentMailListReducer} from '../../Redux/MailSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sent = ({Icon,title,number,isactive}) => {
const [emails,setEmails] = useState();
    const sentMail = useSelector(state=>state.mail.sentMailList);
    
const dispatch = useDispatch();
const navigate = useNavigate();

    const sentFnHandler=async(e)=>{
        e.preventDefault();
        
        navigate('/sent')
        }
        

  return (
    <div className={`sidebarOption ${isactive && 'sidebarOptions--active'}`} onClick={sentFnHandler}>
      <Icon/>
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  )
}

export default Sent
