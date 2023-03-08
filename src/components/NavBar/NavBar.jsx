import React from 'react'
import './Navbar.css'

export default function NavBar() {
  return (
    <div className='n-wrapper'>
      
    <div className='n-left'>
      <div className="n-name">Natalia</div>
      <span>toggle1</span>
      <span>toggle2</span>
    </div>
    <div className='n-right'>
      <div className="n-list">
        <ul>
          <li>Home</li>
          <li>Sobre Mi</li>
          <li>Languages</li>
          <li>Certificados</li>
          <li>Experiencia</li>
          <li>Proyectos</li>
        </ul>
      </div>
      <button className="button">
        Contactame
      </button>
    </div>
    </div>
  )
}
