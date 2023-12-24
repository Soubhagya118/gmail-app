import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton, Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import  StarRate  from '@mui/icons-material/StarRate';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from 'react-router-dom';
import { useSelector} from "react-redux";

const EmailDetails = () => {
const navigate = useNavigate();
const selectMail = useSelector(state=>state?.mail?.selectedMessage);

// console.log("selectmail",selectMail);

  return (
    <div className='w-11/12 ml-2'>

<div  className='w-11/12 flex justify-between sticky border-b-2 h-14 border-b-black  items-center'>
    {/* ================================================= */}
    {/*                         Left Part                 */}
    {/* ================================================= */}
      <div className='text-sm'>
      <IconButton className='' onClick={()=>navigate('/sent')}>
        <ArrowBackIcon />
      </IconButton>
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

      <div className='flex items-center'>
  <p>1-50 of 10,222</p>

  <IconButton>
        <ChevronLeftIcon/>
     
        <ChevronRightIcon/>
      </IconButton>

</div>
</div>

<div className='flex'>
<div className='flex items-center justify-between w-11/12 '>
<div className='flex items-center'>
<h3 className='ml-2'> {selectMail?.subject}</h3>
  <IconButton>
    <LabelImportantIcon/>
  </IconButton>
</div>

  <div className='flex'>
  <IconButton>
    <PrintIcon/>
  </IconButton>
  <IconButton>
    <LaunchIcon/>
  </IconButton>
  </div>
</div>
</div>

<div className='flex'>
<div className='flex items-center justify-between w-11/12 '>
<div className='flex items-center'>
<IconButton>
    <Avatar/>
  </IconButton>
<b className='ml-2'> {selectMail?.subject} </b>

 <p className='ml-2'> {selectMail?.to}</p>
</div>

  <div className='flex items-center'>
  <p>{selectMail?.fullTime}</p>
  <IconButton>
    <StarRate/>
  </IconButton>
  <IconButton>
    <ReplyIcon/>
  </IconButton>
  <IconButton>
    <MoreVertIcon/>
  </IconButton>
  </div>
</div>
</div>

<div className='ml-2 h-full border-2 border-black w-11/12'>
  <p>{selectMail?.message}</p>
</div>

    </div>
  )
}

export default EmailDetails
