import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector(state=>state.user.value)
const mygmailData= useSelector(state=>state.user.value);


return (
    <div  className='flex  h-12 p-2 items-center'>
    <div className=' flex items-center w-2/12'>
<ReorderIcon className='hover:bg-gray-100 cursor-pointer'/>
<img src={logo} className='h-11 w-20'/>
    </div>
    
{/* ========================================================================================== */}
{/*                                             Header Middle                                    */}
{/* =========================================================================================== */}
    <div className='flex-1  flex w-6/12'>
    <div className='m-auto bg-whitesmoke bg-gray-200 w-10/12 p-1 rounded-3xl'>
    <SearchIcon className='bg-gray-200 '/>
<input type='text' placeholder='search mail' className='bg-gray-200 w-11/12'/>
<ExpandMoreIcon  className='bg-gray-200 cursor-pointer'/>
    </div>
    </div>
      

{/* ================================================header right=============================== */}
      <div className='flex items-center w-3/12 gap-3 '>
      <HelpOutlineIcon className='hover:bg-gray-100 cursor-pointer'/>
<SettingsIcon className='hover:bg-gray-100 cursor-pointer'/>
<AppsIcon className='hover:bg-gray-100 cursor-pointer'/>

<img 
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFCUrOw9meo5s6wpulFh9upMGorhmP4t7XA'
className=' h-8 w-8 rounded-full cursor-pointer bg-gray-100'/>
 <b>{user.name}</b>
      </div>
     
    </div>
  )
}

export default Header
