import React, { useState } from 'react'
import './Styles/RangeInput.css'


const Setsat = ({ onChange, isVisible }) => {
  let visible = ''
  if (isVisible === '') {
    visible = 'none'
  } else {
    visible = 'block'
  }
  
  const [sat, setSat] = useState(50)
  const satChange = (event) => {
        onChange(event.target.value)
        setSat(event.target.value)
      }
    
  
  return (
    <div className='rangeInput sat'  style={{display: visible}}>
    <input className = "change" type="range" min="1" max="99" onChange={satChange}/><br/>
    <h4>base saturation {sat} %</h4>
</div>
  )
}

export default Setsat