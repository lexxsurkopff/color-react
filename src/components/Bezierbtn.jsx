import React from 'react'
import './Styles/Btns.css'

const Bezierbtn = ({isVisible}) => {
    
    let visible = ''
    if (isVisible === '') {
      visible = 'none'
    } else {
      visible = 'block'
    }
    const addBezier = () => {
    const addbez =  {id: Date.now()+1}
    //bez(addbez)
    } 
  
    return (
      <button className='rld grd' style={{display: visible}} onClick={addBezier}><i className="fa-solid fa-grip-vertical"></i></button>
    )
}

export default Bezierbtn