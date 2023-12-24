import React from 'react'
import './SidebarOptions.css';
const SidebarOptions = ({Icon,title,number,isactive}) => {
  return (
    <div className={`sidebarOption ${isactive && 'sidebarOptions--active'}`}>
      <Icon/>
      <h2>{title}</h2>
      {/* <p>{number}</p> */}
    </div>
  )
}

export default SidebarOptions
