import React from 'react'
import Chroma from 'chroma-js'
import Coltext from './Coltext'

const Splitcol = ({angle, text, id, vis}) => {
  let leftcolor =''
  let rightcolor =''
  if (text !== '') {
  const splitang = angle/2
  const colorhsl = Chroma(text).hsl()
  const lh = colorhsl[0]
  const ls = colorhsl[1]
  const ll = colorhsl[2]
  const rh = colorhsl[0]
  const rs = colorhsl[1]
  const rl = colorhsl[2]
  let lhue = lh - splitang
  let rhue = rh + splitang
  let rovercicle = 0
  let lovercicle = 0
  if (lhue < 0) {
    lovercicle = lhue+360
  } else {
    lovercicle = lhue
  }
  if (rhue > 360) {
    rovercicle = rhue-360
  } else {
    rovercicle = rhue
  }
  leftcolor = Chroma.hsl([lovercicle, ls, ll, 1]).hex().toUpperCase()
  rightcolor = Chroma.hsl([rovercicle, rs, rl, 1]).hex().toUpperCase()
  } else {
    return
  }
  let visible = 'none'
  if (vis === '') {
    visible = 'none'
  } else {
    visible = vis
  } 
  return (
    <div className='split'  id={id+'splt'} style={{display: visible}}>
        <div className='splitcols' style={{background: leftcolor}}>
            <Coltext text = {leftcolor}/>
        </div>
        <div className='splitcols' style={{background: rightcolor}}>
            <Coltext text = {rightcolor}/>
        </div>
    </div>
  )
}

export default Splitcol