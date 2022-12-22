import React from 'react'
import './Card.css'

const Card = ( {img, title, content} ) => {
  return (
    <div className='work-card'>
        <img src={img} alt="" />
        <span>{title}</span>
        <span>{content}</span>
    </div>
  )
}

export default Card