import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EmailList from './components/BodyPart/EmailList';
import EmailDetails from './components/mailbody/emailDetails';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import EmailListSent from '../src/components/BodyPart/EmailListSent'
const router=createBrowserRouter([
  {
    path:'*',
    element:<App/>,
    
    children:[{
      path:'*',
      element:<EmailList/>
    },
    {
      path:'*sent',
      element:<EmailListSent/>
    },
    {
      path:'*mail',
      element:<EmailDetails/>
    }]
  },
  {
    path:'/signin',
    element:<SignIn/>
  }
  // {
  //   path:'/signup',
  //   element:<SignUp/>
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <RouterProvider router={router}>
  <App />
  </RouterProvider>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
