import React from 'react'
import './Styles/Btns.css'

const Splitbtn = ({isVisible, setid, onClick}) => {
  let visible = ''
    if (isVisible === '') {
      visible = 'none'
    } else {
      visible = 'block'
    }

    function getSplit() {
      const visSplitObj = {visSplit: ''}
      const splitShowHide = document.getElementById(setid+'splt')  
      if (splitShowHide.style.display === 'flex') {
        visSplitObj.visSplit = 'none' 
      } else  { 
        visSplitObj.visSplit = 'flex'
      }
      onClick(visSplitObj)
     }
     
       return (
        
         <button className='rld splt' style={{display: visible}} onClick={getSplit}><i className="fa-solid fa-circle-nodes"></i></button>
        
         )
     
}

export default Splitbtn