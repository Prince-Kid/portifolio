import React from 'react'
import "./skill.css"
import design from "../Skills/asset/c2.png"
import appdesign from "..//Skills/asset/c1.png"
import webdesign from "../Skills/asset/c3.png"


const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I <span style={{color:"darkcyan"}}>do</span> </span>
      <span className="skillDesc">I am Skilled and Passionate web designerwith Experience in creating visually appealing and user-friendly websites. 
      i have a strong understanding of design and a keen eye for detail iam proficient in HTML ,CSS and JavaScript as well as 
      design software such as Figma </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={design} alt="ui Design" className="skillbarimg" />
          <div className="skillbarText">
          
            <details>
              <summary>UI/UX Design</summary>
            
            <p>I'm able to Design Ui By Using Figma</p>
            
            </details>
          </div>
        </div>

        <div className="skillbar">
          <img src={webdesign} alt="web desugn" className="skillbarimg" />
          <div className="skillbarText">
           
          <details>
              <summary>Front-End Development</summary>
               
            <p>I'm Skilled In Html,Css,JavaScript ,React js ,Ajax,Jquery and Bootstrap .</p>
            <div className="experiences">
            <div className="left">
              <h3>Html & Css</h3>
              <p>Professional</p>
              <h3>Java Script</h3>
              <p>Intermediate</p>
              <h3>React Js</h3>
              <p>Intermediate</p>
              </div>
              <div className="right">
              <h3>Ajax & Jquery</h3>
              <p>Basic</p>
              <h3>Bootstrap</h3>
              <p>Professional</p>
              </div>
            </div>
            </details>
          </div>
        </div>

        <div className="skillbar">
          <img src={appdesign} alt="app design" className="skillbarimg" />
          <div className="skillbarText">
            
          <details>
              <summary>Back-End Development</summary>
               
            <p>I'm Skilled In C,C++,Java ,Vb.net ,Php,Mysql and Oracle .</p>
            <div className="experiences">
            <div className="left">
              <h3>C & C++</h3>
              <p>Intermediate</p>
              <h3>Java </h3>
              <p>Intermediate</p>
              <h3>Vb </h3>
              <p>Intermediate</p>
              </div>
              <div className="right">
              <h3>Php </h3>
              <p>Pro</p>
              <h3>Mysql & Oracle</h3>
              <p>Professional</p>
              <h3>Python</h3>
              <p>Intermediate</p>
              </div>
            </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
