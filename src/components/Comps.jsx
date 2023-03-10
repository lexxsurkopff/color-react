import React from 'react'
import Coltext from './Coltext'

const Comps = ({inColor, vis, id}) => {
  let visible = 'none'
 
  if (inColor === '') {
  visible = 'none'
  } else if (vis === 'none') {
   visible = 'none'
  } else if (vis === 'flex') {
    visible = 'flex'
  } else {
    visible = 'none'
  }
  
  
  return (
    <div className='comps' style={{display: visible, background: inColor}} id={id}>
      <Coltext text={inColor}/>
    </div>
  )
}

export default Comps