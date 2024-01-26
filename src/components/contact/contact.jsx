import React from 'react'
import "./project.css"
import cerificate1 from "./asset/www.freecodecamp.org_certification_MucyoPrince_responsive-web-design.png"
import cerificate2 from "./asset/devtown.PNG"
import cerificate3 from "./asset/lms.simplilearn.com_courses_4212_JavaScript-for-Beginners_certificate_download-skillup.png"
import cerificate4 from "./asset/Python.PNG"
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import "./contact.css"
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_30ufy2x', 'template_gda17dn', form.current, 'UyJEPvFpHKoLWdu7h')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Sent !")
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="contactpage" >
      <div className="client">
        <h1 className="contactpageTitle title">
            My <span style={{color:"darkcyan"}}>Achievements</span>
        </h1>
        <p className='section__textp1'>I have had the opportunity to learn from a diverse group of companies and earn certificates.
            some of notable Certificate i get are include
        </p>
        <div className="certificate" >
     <div className="experience-details">
     <div className="about-container">
        <div className="details-container">
        <div className="article-container">
            <img src={cerificate1} alt="Project  1" className="project-img" />
        </div>
        <h2 className="experience-sub-title projrct-title">
         Free Code Camp 
        </h2>
        <p color='white'>A certificate of Responsive Web</p>
        <div className="btn-container">
            <button className='btn btn-color-2 project-btn' ><a href="https://www.freecodecamp.org/" rel="noopener noreferrer">Visit Web</a></button>
            <button className='btn btn-color-2 project-btn'><a href="https://www.freecodecamp.org/certification/MucyoPrince/responsive-web-design" target='_blank'rel="noopener noreferrer">View</a> </button>
        </div>
      </div>

      <div className="details-container">
        <div className="article-container">
            <img src={cerificate2} alt="Project  1" className="project-img" />
        </div>
        <h2 className="experience-sub-title projrct-title">
        DevTown
        </h2>
        <p color='white'>A certificate of Front End Courses</p>
        <div className="btn-container">
            <button className='btn btn-color-2 project-btn' ><a href="https://www.devtown.in/events/basics-of-web-development-bootcamp-free-7-days-long-bootcamp"rel="noopener noreferrer">Visit Web</a></button>
            <button className='btn btn-color-2 project-btn'><a href="https://cert.devtown.in/verify/23gopf" target='_blank' rel="noopener noreferrer">View</a></button>
        </div>
      </div>
{
      <div className="details-container">
        <div className="article-container">
            <img src={cerificate3} alt="Project  1" className="project-img" />
        </div>
        <h2 className="experience-sub-title projrct-title">
        simplilearn
        </h2>
        <p color='white'>A certificate of Java Script</p>
        <div className="btn-container">
        <button className='btn btn-color-2 project-btn' ><a href="https://www.simplilearn.com/"rel="noopener noreferrer">Visit Web</a></button>
            <button className='btn btn-color-2 project-btn'><a href="https://simpli-web.app.link/e/teopcT6BpEb" target='_blank' rel="noopener noreferrer">View</a></button>
        </div>
      </div> }
      <div className="details-container">
        <div className="article-container">
            <img src={cerificate4} alt="Project  1" className="project-img" />
        </div>
        <h2 className="experience-sub-title projrct-title">
        Uniathena
        </h2>
        <p color='white'>A certificate of Particapation in Python</p>
        <div className="btn-container">
        <button className='btn btn-color-2 project-btn' ><a href="https://www.simplilearn.com/"rel="noopener noreferrer">Visit Web</a></button>
            <button className='btn btn-color-2 project-btn'><a href="https://simpli-web.app.link/e/teopcT6BpEb" target='_blank' rel="noopener noreferrer">View</a></button>
        </div>
      </div>
        </div>
        </div>
        </div>
      </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact <span style={{color:"darkcyan"}}>Me</span></h1>
            <span>Please Fill out the form below to discuss any work</span>
            <form action="" className='contactForm'  ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="from_name"/>
                <input type="email" className="email" placeholder='Your Email' name="from_email"/>
                <textarea name="message" cols="30" rows="5" className="msg" placeholder='Your Message' ></textarea>
                <button type='submit' value="send" className='submitBtn'>Submit</button>

                <div className="socialMedia links">
                <a href="https://wa.link/v7lbdi" className='linkedIn' style={{"--color": "#48C857"}}>
                <i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/mucyo-prince-29321421b/" className='linkedIn' style={{"--color": "#0072b1"}}>
                        <i className='fa-brands fa-linkedin-in'></i>
                    </a>
                    <a href="https://www.instagram.com/mucyoprince12/" className='instagram' style={{"--color":"#E1306c"}}>
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a href="https://web.facebook.com/johnx.prince" className='facebook' style={{"--color":"#4267B2"}}>
                        <i className='fa-brands fa-facebook-f'></i>
                    </a>
                    <a href="https://twitter.com/mucyoprince12" className='twitter' style={{"--color":"#01C2F7"}}>
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                    
                    <a href="https://github.com/Prince-Kid" className='github'style={{"--color" :"white"}}>
                        <i className='fa-brands fa-github'></i>
                    </a>
                </div>
            </form>
        </div>
     
    </section>
  )
}

export default Contact
