import React from 'react'
import profile from "../hero/Asset/eHIq8czY_400x400.jpg"

import { Link } from "react-scroll"
import "./hero.css"
const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="herocontent">
            <span className='hello'>Hello,</span>
            <span className="hellotext">I'm <span className="helloname">Prince Mucyo</span><br />Web Developer</span>
            <p className="herodesc">
                Iam a skilled Web Developer With Experience  <br />in creating Visual appealing and user friendly websites
            </p>
            <div className="but">
            <Link to='contact' offset={-100} smooth={true} duration={1000}><button className='btni'>Hire Me &#128187;</button></Link>  
          <a href='https://drive.google.com/file/d/1rePoRrTT9Eq0YOnu_JZaevN-FE7I0WTG/view?usp=drive_link'><button className='btni'>My Resume <i class="fa-regular fa-file"></i></button></a>

          </div>
        </div>
        <img src={profile} alt="My Profile" className='bg'/>
      </section>
    </>
  )
}

export default Hero
