import React from 'react'
import './Styles/RangeInput.css'

const AngleInput = ({ onChange, value, isVisible, vis }) => {
    
    let isvisible = ''
    if (isVisible === '') {
      isvisible = 'none'
    } else {
      isvisible = 'block'
    }
    
    const angleChange = (event) => { 
          onChange(event.target.value)
      }
    let visible = 'none'
    if (vis === '') {
      visible = 'none'
    } else {
      vis = 'block'
      visible = vis
    }
    
  return (
    <div className='rangeInput angle' style={{display: visible}}>
        <input className = "change" style={{display: isvisible}} type="range" min="1" max="359" onChange={angleChange}/><br/>
        <h4 style={{display: isvisible}}>split {value} grad</h4>
    </div>
    
  )
}

export default AngleInput