import React from 'react'
import Chroma from 'chroma-js'
import Coltext from './Coltext'

const Comps = ({inColor, value}) => {
  let compColor = ''
  if (inColor !== '') {
    const hslcolor = Chroma(inColor).hsl()
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
    value(compColor)
  } else {
    return
  }
  return (
    <div className='comps' style={{background: compColor}}>
      <Coltext text={compColor}/>
    </div>
  )
}

export default Comps