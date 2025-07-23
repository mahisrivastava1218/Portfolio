import React from 'react'
import pdf from "../pdf/Mahima_Resume.pdf";
import heroImg from "../assets/hero-section/profile-pic.png"
const Home = () => {
  return (
    <header className='container d-flex justify-content-between align-items-center home  gap-3'>
      <section className='left-section'>
      {/* Creative UI/UX Designer & Software Developer with 1 year of freelance experience and a completed fellowship in Fullstack Development.
Skilled in Figma, JavaScript, ReactJS,Boostrap and solving 450+ DSA problems to build responsive, user-focused web apps. */}
        <h1 style={{fontSize:"30px",fontWeight:"bolder"}}>Creative UI/UX Designer & Software Developer</h1>
        {/* user should see pdf as clicking on download it's download by Mahimaresume */}
        <a href={pdf} download="MahimaResume.pdf" className='btn btn-outline-warning p-2 mt-3'>Download Resume</a>
      </section>
     <section className='right-section'>
       <div className='img'>
        <img src={heroImg} alt="hero-img"/>
        </div>
     </section>
    </header>
  )
}

export default Home
