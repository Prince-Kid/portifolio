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
            <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Modi, exercitationem? Vel, cumque itaque? Enim amet libero numquam ratione facere rerum dicta quo <br /> Laboriosam iusto omnis sit accusantium possimus id commodi. </p>
          </div>
      </div>
    </section>
  )
}

export default About
