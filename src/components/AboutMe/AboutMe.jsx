
import React from 'react';

import './AboutMe.css'
import divider from '../../img/divider.png'
import messages from '../../img/messages.png'
import pens from '../../img/pens.png'
import books from '../../img/books.png'
import notepad from '../../img/notepad.png'
import Card from '../Card/Card'


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
          <div className="blur a-blur1" style={{ background: "#ABF1FF94" }}></div>

        </div>

        {/*right side*/}
        <div className="cards">

          {/*Primera card*/}

          <div style={{ right: '19rem' }} >

            <Card
              emoji={notepad}
              heading={'Habilidades blandas'}
              detail={'Pensamiento Critico, Proactiva, Comunicativa, Gestion de tiempo, Adaptabilidad, Trabajo en Equipo'}
            />
          </div>

          {/*Segunda card*/}

          <div style={{ top: '16rem', left: '-6rem' }}>
            <Card

              emoji={books}
              heading={'Habilidades Pasivas'}
              detail={'Ingles:C1, Español: Nativo, Resolucion de problemas, Hablar en publico, Creatividad, Investigación'} />
          </div>

          {/*Tercera card*/}

          <div style={{ top: '1rem', left: '3rem' }}>
            <Card

              emoji={pens}
              heading={'Habilidades Tecnicas'}
              detail={'HTML, CSS, JavaScript, React , Redux, Node, Express, MongoDB, Moongose, React Native, Git y GitHub.'}
            />
            {/*Borrar el boton porque va a ser un link en la imagen*/}
            <button className='c-button' style={{ top: '2rem', left: '3rem' }}>Saber mas</button>

          </div>



        </div>


      </div>

      <div className="a-divider">
      <img src={divider} alt="" />
      </div>
    </div>
  )
}

export default AboutMe