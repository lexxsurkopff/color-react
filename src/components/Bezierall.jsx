import React from 'react'
import Bezier from './Bezier'
import Chroma from 'chroma-js'

const Bezierall = ({isVis, seccol, id, vis}) => {
  let beziercols = []
  let a = isVis.toString()
  let b = seccol.toString()
  let visible = ''
    if (isVis !== '') {
      visible = vis
      beziercols = Chroma.bezier([a, b]).scale().colors(6)
    } else {
      visible = 'none'
    }
    
  return (
    <div className='bezierall' style={{display: visible}} id={id+'bzr'}>
        
                 {beziercols.map((index) => { return <Bezier isvisible={visible} key={Math.random()} index={index}/>})}
       
    </div>
  )
}

export default Bezierall