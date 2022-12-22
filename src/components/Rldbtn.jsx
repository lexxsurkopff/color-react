import React from 'react'
import Chroma from 'chroma-js'
import './Styles/Btns.css'

const Rldbtn = ({onClick}) => {
    function randColor() {
    const cols = Chroma.random()
    const hex = Chroma(cols).hex().toUpperCase()
    let compColor = ''
    const hslcolor = Chroma(hex).hsl()
    const h = hslcolor[0]
    const s = hslcolor[1]
    const l = hslcolor[2]
    let nh = h + 180
    let hue = 0
    if (nh>360) {
      hue = nh-360
    } else {
      hue = nh
    }
    compColor = Chroma.hsl([hue, s, l, 1]).hex().toUpperCase()
    let colColObj = {
      startcol: hex,
      endcol: compColor
    }
    onClick(colColObj) 
     
  }
  return (
    <button className='rld' onClick={randColor}><i className="fa-solid fa-rotate"></i></button>
  )
}

export default Rldbtn