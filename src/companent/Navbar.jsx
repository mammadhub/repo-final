import React from 'react'
import { Link } from 'react-router-dom'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

function Navbar() {
  return (
    <>
      <div className="width">
        <div className="navbarr">
            <div className="logo">
                Logo
            </div>
            <ul className="listt">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/'>Galerry</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>
            <div className="icon">
            <TiSocialFacebook />
            <TiSocialTwitter />
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
