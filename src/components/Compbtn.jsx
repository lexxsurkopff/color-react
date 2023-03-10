import React from 'react'
import './Styles/Btns.css'

const Compbtn = ({isVisible, setid, onClick}) => {
  let visible = ''
    if (isVisible === '') {
      visible = 'none'
    } else {
      visible = 'block'
    }
    function getVis () {
      let visCompObj = {visComp: ''}
      const compsShowHide = document.getElementById(setid)
      if (compsShowHide.style.display === 'flex') {
        visCompObj.visComp = 'none' 
      } else  { 
        visCompObj.visComp = 'flex'
      }
      onClick(visCompObj)
    }   
    
  return (
    <button className='rld comp' style={{display: visible}} onClick={getVis}><i className="fa-solid fa-up-right-and-down-left-from-center"></i></button>
  )

}
export default Compbtn