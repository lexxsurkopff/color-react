import React from 'react'
import './Styles/Btns.css'

const Compbtn = ({isVisible}) => {
  let visible = ''
    if (isVisible === '') {
      visible = 'none'
    } else {
      visible = 'block'
    }


function getComp() {
   console.log('click')
}

  return (
    <button className='rld' style={{display: visible}} onClick={getComp}><i className="fa-solid fa-up-right-and-down-left-from-center"></i></button>
  )

}
export default Compbtn