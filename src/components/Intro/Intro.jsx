import React from 'react'
import './Intro.css'
import gitHubLogo from '../../img/gitHubLogo.png'
import linkedinLogo from '../../img/linkedinLogo.png'
import cvLogo from '../../img/cvLogo.png'
import mailLogo from '../../img/mailLogo.png'
import portfolioImg from '../../img/portfolioImg.png'
import idea from '../../img/idea.png'
import document from '../../img/paperIdeas.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'



export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hola! soy </span>
          <span>Natalia Torres</span>
          <span>Desarrolladora Full-Stack  MERN</span>
          <button className='button i-button'>Contratame</button>
          <div className="i-icons">
            <a href="https://github.com/NataliaTorres5">
              <img src={gitHubLogo} alt="github" />
            </a>
            <a href="https://drive.google.com/file/d/1tFkUkxQSXmvDlb6aEZmn87E2RTsHh1TF/view?usp=sharing">
              <img src={cvLogo} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/nataliamtorresm/">
              <img src={linkedinLogo} alt="" />
            </a>
            <a href="mailto: nataliatorres88@gmail.com">
              <img src={mailLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">

        <div className='f-div1' style={{top:'-4%', left:'68%'}} >
          <FloatingDiv image={idea} txt1="Full-Stack" txt2='Developer' />
        </div>

        <img src={portfolioImg} alt="portfolio img" />

        <div className='f-div2' style={{top:'18rem', left:'0rem'}}>
        <FloatingDiv image={document} txt1="Proyects" txt2='for you' />
        </div>

      </div>

      
    </div>
  )
}
