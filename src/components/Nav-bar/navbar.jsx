import React from 'react'
import "./navbar.css"
import { useState } from 'react'
import menu from "./asset/menu-alt-1-svgrepo-com.svg"
import { Link } from "react-scroll"

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className="navbar">
        <h1>Prince <span style={{color:"darkcyan"}}>.</span></h1>
        <div className="desktopMenu">
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="project" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass="active" to="contactpage" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Achievements</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact Me</Link>
        </div>
     
        <img src={menu} alt="menu" className='mbMenu imag' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display:showMenu? "flex" : "none"}}>
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500} className="ListItem"onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="project" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass="active" to="contactpage" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setShowMenu(false)}>Achievements</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setShowMenu(false)}>Contact Me</Link>
        </div>
     
    </nav>
  )
}

export default Navbar
