import React from 'react'

import './Card.css'

export default function Card({emoji, heading, detail}) {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading} </span>
        <p>{detail}  </p>
    </div>
  )
}
