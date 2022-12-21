import React from 'react'

const Bezier = ({isvisible}) => {
  
  let visible = ''
    if (isvisible !== '') {
      visible = 'block'
    } else {
      visible = 'none'
    }
  return (
    <div className='bezier' style={{display: visible}} ></div>
  )
}

export default Bezier