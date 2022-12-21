import React, { useState } from 'react'
import './Styles/RangeInput.css'

const Setlum = ({onChange, isVisible}) => {
  let visible = ''
  if (isVisible === '') {
    visible = 'none'
  } else {
    visible = 'block'
  }

    const [lum, setLum] = useState(50)
    const satChange = (event) => {
        onChange(event.target.value)
        setLum(event.target.value)
    }
  return (
    <div className='rangeInput' style={{display: visible}}>
    <input className = "change" type="range" min="1" max="99" onChange={satChange}/><br/>
    <h4>base luminance {lum} %</h4>
</div>
  )
}

export default Setlum