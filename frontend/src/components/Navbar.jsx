import React from 'react'
import "./navbar.css"
import { FaSmile } from "react-icons/fa";
// import logo from "\barabari_logo-CW6k3Oea.png"
const Navbar = ( {theme} ) => {
  return (
    <div style={{backgroundColor:theme==="dark"?"#101828":"#3949AB" , color:theme==="dark"?"white":"white"}} className='navbar'>
      <div className="left">
        <img src="\src\assets\logo.png"   alt="" />
        <div className="wrap-heading">
        <h2 className='nav-h2'>the barabari Collective</h2>
        <p className='nav-p'  >Javascript online Compiler</p>
        </div>
      </div>
       
      <div className="right">
         <h2>Enjoy Coding </h2>
         <FaSmile style={{color:"white"}} size={28} />
      </div>
    </div>
  ) 
}
export default Navbar