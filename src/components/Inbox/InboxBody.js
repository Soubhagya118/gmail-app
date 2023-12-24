import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux";
import {openInboxMessage} from "../../Redux/MailSlice";
import axios from "axios"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';

const InboxBody = ({to,id,from,subject,message,timestamp,time,fullTime,isChecked}) => {
  const selectcheck = useSelector((state)=>state.mail.eachInboxMessage)
  const navigate = useNavigate();
  const dispatch=useDispatch();

let timee= new Date(timestamp?.seconds*1000).toLocaleTimeString()
const inboxMail = useSelector(state=>state?.user?.value);


  const openmessage = async(e) => {
  e.preventDefault()
  let name =inboxMail?.email;
  let namee=name.replace(/[.]/g, "")
let data={
  user:name,
  to:to,
  from:from,
  subject:subject,
  message:message,
  id:id,
  isChecked:true,
  fullTime:new Date(timestamp?.seconds*1000).toLocaleString(),
  time:new Date(timestamp?.seconds*1000).toLocaleTimeString(),
  timestamp:timestamp

}
  try{
let x = await axios.put(`https://mail-dec-default-rtdb.firebaseio.com/sent-emails/${namee}/${data.id}.json`,{

...data
});
// console.log("x data from email body",x)
dispatch(openInboxMessage({...data,
  // fullTime:x.data.fullTime,time:x.data.time,
  isChecked:true
}));
navigate("/inboxmail")

  }catch(err){
    console.log(err.message)
  }
 
  }

  return (
    <>
 <div className='flex w-11/12 justify-between cursor-pointer hover:bg-gray-100 mt-1' onClick={openmessage}>
    {/* =================================left part========================= */}
      <div className='flex '>
      { !isChecked && <FiberManualRecordIcon className='text-blue-800 font-extrabold'/>}
<CheckBoxOutlineBlankIcon/>
<StarBorderIcon/>
<LabelIcon/>
       <span className='mr-2'>from:- </span> <h4> {from}</h4>
      </div>

      {/* ===========================body part ============================= */}
<div>
    <div className=''>
        <p className=''><b>Subject</b>{message}</p>
    </div>
</div>

      {/* ============================right part =============================== */}
      <div>
        <p>{timee}</p>
      </div>
    </div>
    </>
  )


}

export default InboxBody
