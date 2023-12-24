import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/BodyPart/EmailList'
import EmailBody from './components/BodyPart/EmailBody';
import EmailDetails from './components/mailbody/emailDetails';
import {Routes, Route,Link, useNavigate} from "react-router-dom";
import Auth from "./Authentication/Auth"
import {userDetails} from './Redux/UserSlice'
import { useDispatch, useSelector } from 'react-redux';
import EmailListSent from './components/BodyPart/EmailListSent';
import InboxList from '../src/components/Inbox/InboxList'
import InboxDetailBody from './components/Inbox/InboxDetailBody';

function App() {
  const user = useSelector(state=>state?.user?.value);
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const logOutFn =(e)=>{
    e.preventDefault();
navigate('/signin')
    dispatch(userDetails(null))
  }
  return (
  
 <>{user ? <>
 <Header/>
 <div className='flex'>
 <Sidebar/>
 <Routes>
  <Route path='*' exact element={<InboxList/>}/>
  <Route path='/mail' element={<EmailDetails/>}/>
  <Route path='/inboxmail' element={<InboxDetailBody/>}/>

  <Route path='/sent' element={<EmailListSent/>}/>

</Routes>
<button onClick={logOutFn} className='bg-blue-400 h-10 p-2 text-white mr-1 rounded-md'>Logout</button>
 </div>
    

  </>
    // <div className="App">
   
    // ;'}</div>
   :<Auth/>}</>  );
}

export default App;
