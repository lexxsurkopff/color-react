import React from 'react'
import './Styles/Btns.css'

const Bezierbtn = ({isVisible, id, onClick}) => {
    
    let visible = ''
    if (isVisible === '') {
      visible = 'none'
    } else {
      visible = 'block'
    }
    const showHideBezier = () => {
      let gradeVisObj = {gradeVis: ''}
    const hideShowBezier = document.getElementById(id+'bzr')
    if (hideShowBezier.style.display === 'flex') {
    gradeVisObj.gradeVis = 'none'
    } else {
      gradeVisObj.gradeVis = 'flex'  
    }
    onClick(gradeVisObj)
    }  
    
  
    return (
      <button className='rld grd' style={{display: visible}} onClick={showHideBezier}><i className="fa-solid fa-grip-vertical"></i></button>
    )
}

export default Bezierbtn