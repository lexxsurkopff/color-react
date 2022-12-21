import React from 'react'
import Bezier from './Bezier'

const Bezierall = ({isVisible, seccol}) => {
  console.log(isVisible, seccol)
  let visible = ''
    if (isVisible !== '') {
      visible = 'flex'
    } else {
      visible = 'none'
    }
    
  return (
    <div className='bezierall' style={{display: visible}}>
        <Bezier isvisible={isVisible}/>
        <Bezier isvisible={isVisible}/>
        <Bezier isvisible={isVisible}/>
        <Bezier isvisible={isVisible}/>
        <Bezier isvisible={isVisible}/>
        <Bezier isvisible={isVisible}/>
        
    </div>
  )
}

export default Bezierall