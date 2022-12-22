import React from 'react'
import Coltext from './Coltext'

const Comps = ({inColor}) => {
  let visible = ''
  if (inColor === '') {
  visible = 'none'
  } else {
    visible = 'flex'
  }
  
  return (
    <div className='comps' style={{display: visible, background: inColor}}>
      <Coltext text={inColor}/>
    </div>
  )
}

export default Comps