import React from 'react'
import "./about.css"
import img from "./eHIq8czY_400x400.jpg"
const About = () => {
  return (
    <section id='About-me'>
        <div className="about-text">
        <p>Get Know About Me</p>
        <h1>About <span style={{color:"darkcyan"}}>Me</span></h1>
        </div>
      <div className="about-container">
        <img src={img} alt="My Profile" className='profile'/>
        <div className="abouts">
        <div className="about-details">
            <div className="experience">
            <i className="fa-solid fa-school"></i>
              <h1>Experience</h1>
              <p>2+ years</p>
              <p>Frontend Development</p>
            </div>
            <div className="experience">
            <i class="fa-solid fa-certificate"></i>
              <h1>Education</h1>
              <p>B.sc Bachelors Degree</p>
              <p></p>
            </div>
           
            </div>
            <p className='about-desc'>
Hello! I'm Prince Mucyo, a passionate software developer from Rwanda. <br></br>
With a knack for problem-solving, I specialize in web and backend development, <br></br>
crafting efficient and user-friendly solutions.<br></br>
 My vision is to create impactful software that addresses real-world needs. <br></br>
 I actively contribute to open source projects and love connecting with fellow developers.<br></br> 
 Let's innovate and code together! 🚀 </p>
          </div>
      </div>
    </section>
  )
}

export default About
