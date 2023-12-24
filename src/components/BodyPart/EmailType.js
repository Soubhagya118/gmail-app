import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const EmailType = () => {
  return (
    <div className='w-11/12 flex border-2 border-black justify-between'>
      <div className='flex'>
        <InboxIcon/>
        <p>Primary</p>
      </div>
      <div className='flex'>
        <PeopleIcon/>
        <p>Social</p>
      </div>
      <div className='flex'>
        <LocalOfferIcon/>
        <p>Promotion</p>
      </div>
    </div>
  )
}

export default EmailType
