import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useSelector,useDispatch } from 'react-redux';
import {openSendMessage} from '../Redux/MailSlice';
import axios from "axios"
import Sent from './sent/Sent';
import Inbox from './Inbox/Inbox';

const Sidebar = () => {
  const sendMessageIsOpen = useSelector((state)=>state.mail.sendMessageIsOpen);

  const sentmsglist =useSelector(state=>state.mail.sentMailList);
  const count= sentmsglist.length;
  const dispatch =useDispatch();


  return (
    <div className='w-2/12  pb-2'>
    <button className='p-3 rounded-3xl m-4 bg-white shadow-xl text-blue-600 font-semibold items-center shadow-slate-400 ' onClick={()=>dispatch(openSendMessage(!sendMessageIsOpen))}>
    <AddIcon className='mr-3'/>
   Compose
    </button>

    {/* ===================================first======================= */}
    <div className=''>

    <Inbox Icon={InboxIcon} title='Inbox' number="224" isactive='true' />
    <SidebarOptions Icon={StarRateIcon} title='Starred' number="224" />
    <SidebarOptions Icon={AccessTimeIcon} title='Snoozed' number="224" />
    <SidebarOptions Icon={LabelImportantIcon} title='Important' number="224" />
    <Sent Icon={SendIcon} title='Sent' number={count} />
    <SidebarOptions Icon={DraftsIcon} title='Drafts' number="224" />
    <SidebarOptions Icon={InboxIcon} title='Catagory' number="224" />

    </div>

     {/* ============================================middle======================= */}
     <div className=' mt-3'>
<h3 className=' m-auto text-lg ml-3  text-red-500 font-medium'>Meet</h3>
<div className='grid gap-3 text-sm'>
<SidebarOptions Icon={VideocamIcon} title='New Meeting' />
<SidebarOptions Icon={KeyboardIcon} title='Join a Meeting' />
</div>
</div>
   


    </div>
  )
}

export default Sidebar
