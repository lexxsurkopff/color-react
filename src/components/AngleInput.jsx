import React, { useState } from 'react'
import './Styles/RangeInput.css'

const AngleInput = ({ onChange, value, isVisible }) => {
    
    let visible = ''
    if (isVisible === '') {
      visible = 'none'
    } else {
      visible = 'block'
    }
    
    const angleChange = (event) => { 
          onChange(event.target.value)
      }
          
    
  return (
    <div className='rangeInput'>
        <input className = "change" style={{display: visible}} type="range" min="1" max="359" onChange={angleChange}/><br/>
        <h4 style={{display: visible}}>split {value} grad</h4>
    </div>
    
  )
}

export default AngleInput