import React from 'react'
import './styles/gif.css'

export default function Gif({id,image}) {
  return (
    <div className='gif'>
        <img src={image} alt={id} />
    </div>
  )
}
