import React from 'react'
import Chroma from 'chroma-js'
import './Styles/Btns.css'

const Rldbtn = ({onClick}) => {
    function randColor() {
    const cols = Chroma.random()
    const hex = Chroma(cols).hex().toUpperCase()
    onClick(hex)
     
  }
  return (
    <button className='rld' onClick={randColor}><i className="fa-solid fa-rotate"></i></button>
  )
}

export default Rldbtn