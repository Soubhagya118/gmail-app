import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {openMessage} from '../../Redux/MailSlice'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import axios from 'axios';


const EmailBody =({to,id,from,subject,message,timestamp,time,fullTime,isChecked}) => {
//console.log("all data in emailbody",to,message,timestamp,id,subject,isChecked)
  const selectcheck = useSelector((state)=>state.mail.selectedMessage)
  const navigate = useNavigate();
  const dispatch=useDispatch();

let timee= new Date(timestamp?.seconds*1000).toLocaleTimeString()
var userMail = useSelector(state=>state?.user?.value);

  const openmessage = async(e) => {
  e.preventDefault()
  let name =to?.replace(/[.]/g, "")
let data={
  user:name,
  to:to,
  from:from,
  subject:subject,
  message:message,
  id:id,
  isChecked:isChecked,
  fullTime:new Date(timestamp?.seconds*1000).toLocaleString(),
  time:new Date(timestamp?.seconds*1000).toLocaleTimeString(),
  timestamp:timestamp

}
  try{
let x = await axios.get(`https://mail-dec-default-rtdb.firebaseio.com/sent-emails/${name}/${data.id}.json`);
// console.log("x data from email body",x)
dispatch(openMessage({...data
  // fullTime:x.data.fullTime,time:x.data.time,
}));
navigate("/mail")

  }catch(err){
    console.log(err.message)
  }
 
  }

  return (
    <div className='flex w-11/12 justify-between cursor-pointer hover:bg-gray-100 mt-1' onClick={openmessage}>
    {/* =================================left part========================= */}
      <div className='flex '>
      {/* { !isChecked && <FiberManualRecordIcon className='text-blue-800 font-extrabold'/>} */}
<CheckBoxOutlineBlankIcon/>
<ReplyAllIcon className='text-gray-600'/>
{/* <StarBorderIcon/> */}
{/* <LabelIcon/> */}
       <span className='mr-1  text-gray-700'>to:-</span><h4 className=' text-gray-500'>{to}</h4>
      </div>

      {/* ===========================body part ============================= */}
<div>
    <div className=''>
        <p className=' text-gray-700'><b>Subject</b>{message}</p>
    </div>
</div>

      {/* ============================right part =============================== */}
      <div>
        <p className=' text-gray-600'>{timee}</p>
      </div>
    </div>
  )
}

export default EmailBody
