import React from 'react'

const Bezier = ({isvisible, index}) => {
  
  let visible = ''
    if (isvisible !== '') {
      visible = 'block'
    } else {
      visible = 'none'
    }
  return (
    <div className='bezier' style={{display: visible, background: index}}></div>
  )
}

export default Bezier