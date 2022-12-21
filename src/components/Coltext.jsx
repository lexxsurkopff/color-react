import React from 'react'
import './Styles/Coltext.css'

const Coltext = ({text}) => {

  let visible = ''
    if (text === '') {
      visible = 'none'
    } else {
      visible = 'block'
    }

  return (
    <div className='coltext' style={{display: visible}}>
    <h3 >{text}</h3>
    </div>
  )
}

export default Coltext