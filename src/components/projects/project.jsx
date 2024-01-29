import React from 'react'
import "./project.css"
import project1 from ".//asset/shop.PNG"
import project2 from ".//asset/expenditure.PNG"
import project3 from ".//asset/cart.PNG"
import project4 from ".//asset/Education.PNG"
import project5 from ".//asset/inyange.PNG"
import project6 from ".//asset/log in.png"

const Project = () => {
  return (
    <section id="project">
        <h1 className='title'>My <span style={{color:"darkcyan"}}>Projects</span></h1>
        <p className="section__textp1">Browse My Recent</p>   
     <div className="experience-details">
      <div className="about-container">
       <div className="details-container">
        <div className="article-container">
            <img src={project1} alt="Project  1" className="project-img" />
        
        <h4 className="experience-sub-title projrct-title">
         Online Shop
        </h4>
        <p>React Js & Vanila Css 🤞</p>
        <div className="btn-container">
            <button className='btn btn-color-2 project-btn' ><a href="https://github.com/Prince-Kid/Login-and-Signup-Html-css" rel="noopener noreferrer">Github</a></button>
            <button className='btn btn-color-2 project-btn' ><a href="https://gomagadgets.netlify.app/"  rel="noopener noreferrer">Live Demo</a></button>
        </div>
        </div>
      </div>

      <div className="details-container">
        <div className="article-container">
            <img src={project2} alt="Project  1" className="project-img" />
        </div>
        <h4 className="experience-sub-title projrct-title">
        Monthly Expenditure</h4>
        <p>Html Css JavaScript(Jquery & Ajax) Bootstrap Php And My Sql</p>
        
        <div className="btn-container">
            <button className='btn btn-color-2 project-btn'>Github</button>
            <button className='btn btn-color-2 project-btn' >Live Demo</button>
        </div>
      </div>

      <div className="details-container">
        <div className="article-container">
            <img src={project3} alt="Project  1" className="project-img" />
        </div>
        <h4 className="experience-sub-title projrct-title">
         Shopping Cart
        </h4>
        <p>React Js</p>
        <div className="btn-container">
            <button className='btn btn-color-2 project-btn' ><a href="https://prince-kid.github.io/React-Cart/" rel="noopener noreferrer">Github</a></button>
            <button className='btn btn-color-2 project-btn' ><a href="https://prince-kid.github.io/React-Cart/" rel="noopener noreferrer">Live Demo</a></button>
        </div>
      </div>

      <div className="details-container">
        <div className="article-container">
            <img src={project4} alt="Project  1" className="project-img" />
        </div>
        <h4 className="experience-sub-title projrct-title">
         E-Learning
        </h4>
        <p>React Js & Vanilla Css</p>
        <div className="btn-container">
            <button className='btn btn-color-2 project-btn' ><a href="https://github.com/Prince-Kid/E-Learn-Online-Learning-" rel="noopener noreferrer">Github</a></button>
            <button className='btn btn-color-2 project-btn' ><a href="https://online-learning-ten.vercel.app/" rel="noopener noreferrer">Live Demo</a></button>
        </div>
      </div>

      <div className="details-container">
        <div className="article-container">
            <img src={project5} alt="Project  1" className="project-img" />
        </div>
        <h4 className="experience-sub-title projrct-title">
         Inyange Industry Clone
        </h4><p> Html And Css</p>
        <div className="btn-container">
            <button className='btn btn-color-2 project-btn' ><a href="https://github.com/Prince-Kid/Inyange-Clone-Html-css" rel="noopener noreferrer">Github</a></button>
            <button className='btn btn-color-2 project-btn' ><a href="https://prince-kid.github.io/Inyange-Clone-Html-css/" rel="noopener noreferrer">Live Demo</a></button>
        </div>
      </div>

       <div className="details-container">
        <div className="article-container">
            <img src={project6} alt="Project  1" className="project-img" />
        </div>
        <h4 className="experience-sub-title projrct-title">
        Land Page & Login Form 
        </h4>
        <p> Html And Css </p>
        <div className="btn-container">
        <button className='btn btn-color-2 project-btn' ><a href="https://github.com/Prince-Kid/Login-and-Signup-Html-css" rel="noopener noreferrer">Github</a></button>
            <button className='btn btn-color-2 project-btn' ><a href="https://prince-kid.github.io/Login-and-Signup-Html-css/"  rel="noopener noreferrer">Live Demo</a></button>
        </div>
      </div> 
      </div>
        </div>
    </section>
  )
}

export default Project
