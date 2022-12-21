import React from 'react'
import './Styles/Btns.css'

const Splitbtn = ({isVisible}) => {
  let visible = ''
    if (isVisible === '') {
      visible = 'none'
    } else {
      visible = 'block'
    }

    function getComp() {
        console.log(visible)
     }
     
       return (
        
         <button className='rld' style={{display: visible}} onClick={getComp}><i className="fa-solid fa-circle-nodes"></i></button>
        
         )
     
}

export default Splitbtn