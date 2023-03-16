import React from 'react'
import './AboutMe.css'
import divider from '../../img/divider.png'
import messages from '../../img/messages.png'
import pens from '../../img/pens.png'
import books from '../../img/books.png'

function AboutMe() {
  return (
    <div className='a-divider'>
      <img src={divider} alt="" />
   
    <div className="aboutMe">

      {/* Left side*/}


      <div className="about">
        <div className='me'>

        <span>Sobre</span> 
        <span>Mi</span>
        </div>
       

        <span>
          Cuento con +700h de desarrollo, donde realicé proyectos tanto grupales como  individuales, utilizando metodologías Agile / SCRUM trabajando con las siguientes tecnologías: HTML, CSS, JavaScript, React , Redux, Node, Express, MongoDB, Moongose, React Native, Git y GitHub.
        </span>
        <button className='button a-button'> Descargar CV</button>
        <div className="blur a-blur1" style={{background:"#ABF1FF94"}}></div>

      </div>

      {/*right side*/}
      <div className="cards">

        rightside

      </div>


    </div>
    </div>
  )
}

export default AboutMe