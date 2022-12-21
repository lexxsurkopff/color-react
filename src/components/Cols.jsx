import React from 'react'
import { useState } from 'react';
import Chroma from 'chroma-js'
import Rldbtn from './Rldbtn';
import Coltext from './Coltext';
import Compbtn from './Compbtn';
import Comps from './Comps';
import Splitcol from './Splitcol';
import Splitbtn from './Splitbtn';
import AngleInput from './AngleInput';
import Setsat from './Setsat';
import Setlum from './Setlum'
import Delcol from './Delcol';
import Bezierall from './Bezierall';
import Bezierbtn from './Bezierbtn';


const Cols = (ids) => {
  
    
    let [hex, setHex] = useState('')
    const hexCol = (hex) => {
      setHex(hex)
    }  
    const [angle, setAngle] = useState(50) 
    const splitAngle = (angle) => {
      setAngle(angle)
      
    }
    const [sat, setSat] = useState(50) 
    const getSat = (sat) => {
      setSat(sat)
    }
    const [lum, setLum] = useState(50) 
      const getLum = (Lum) => {
      setLum(Lum)
    } 
     
    if (hex !== '') { 
    const oldcolor = Chroma(hex).hsl()
    const h = oldcolor[0]
    const s = sat/100 
    const l = lum/100
    const newcolor = Chroma.hsl([h, s, l, 1]).hex().toUpperCase()
    hex = newcolor
    } else {
      hex = ''
    }
  const [seccol, setSeccol]=useState('')
  const endColor = (endcolor) => {
  setSeccol(endcolor)
  //console.log(endcolor)
  }
    
  return (
    <div className='colcontainer'>
    <div className='col' style={{background: hex}}>
      <Splitcol angle={angle} text={hex}/>
      <AngleInput onChange={splitAngle} value={angle} isVisible={hex}/>
      <Comps inColor={hex} value={endColor}/>
      <Coltext text={hex}/>
      <Bezierbtn isVisible={hex}/>
      <Splitbtn isVisible={hex}/>
      <Compbtn isVisible={hex}/>
      <Rldbtn onClick={hexCol}/>
      <Setsat onChange={getSat} isVisible={hex}/>
      <Setlum onChange={getLum} isVisible={hex}/>
      <Delcol id={ids.ids}/> 
     
    </div>
    <Bezierall isVisible={hex} seccol={seccol}/>
    </div>
  )

}

export default Cols