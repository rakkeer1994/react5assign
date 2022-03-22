import React from 'react'
import { NavLink } from 'react-router-dom'
const cssstyle = ({isActive})=>{return {backgroundColor: isActive ? "green":"blue",
 transform: isActive ? "scale(1.2)":"",
 color: isActive ? "black":"yellow"
}}
const Header = () => {
  return (
    <>
    <ul>
      <li>  <NavLink style={cssstyle} to='/home' >Home</NavLink> </li>
      <li>  <NavLink style={cssstyle} to='/student' >Students</NavLink> </li>
      <li> <NavLink style={cssstyle} to='/contact' className='btn btn-danger'>Contact Us</NavLink> </li>
    </ul>
    </>
  )
}

export default Header