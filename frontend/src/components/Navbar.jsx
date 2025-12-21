import React from 'react'
import "./navbar.css"
import { FaSmile } from "react-icons/fa";
// import logo from "\barabari_logo-CW6k3Oea.png"
const Navbar = ( {theme} ) => {
  return (
    <div style={{backgroundColor:theme==="dark"?"#02151fd1":"#d2e0e7fe" , color:theme==="dark"?"white":"black"}} className='navbar'>
      <div className="left">
        <img src="\src\images\barabari_logo-CW6k3Oea.png"  style={{width:"60px", borderRadius:"50%"}} alt="" />
        <h2>the barabari Collective</h2>
      </div>
      <div className="middle">
        
        <h1 style={{fontSize:"40px"}}>Javascript online Compiler</h1>
      </div>
      <div className="right">
         
         <h2>Enjoy Coding </h2>
         <FaSmile style={{color:theme==="dark"?"white":"black"}} size={28} />
      </div>
    </div>
  ) 
}
export default Navbar