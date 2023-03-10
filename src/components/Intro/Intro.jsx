import React from 'react'
import './Intro.css'
import gitHubLogo from '../../img/gitHubLogo.png'
import linkedinLogo from '../../img/linkedinLogo.png'
import cvLogo from '../../img/cvLogo.png'
import portfolioImg from '../../img/portfolioImg.png'


export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hola! soy </span>
          <span>Natalia Torres</span>
          <span>Desarrolladora Full-Stack  MERN, cuento con +700h de desarrollo, donde realicé proyectos tanto grupales como  individuales, utilizando metodologías Agile / SCRUM trabajando con las siguientes tecnologías: HTML, CSS, JavaScript, React , Redux, Node, Express, MongoDB, Moongose, React Native, Git y GitHub.</span>
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
          </div>
        </div>


      </div>
      <div className="i-right">

        I am right side

      </div>
    </div>
  )
}
