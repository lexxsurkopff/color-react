import React from 'react'
import './Styles/Btns.css'

const Colsbtn = ({onClick}) => {
  const addCount = () => {
  const addcols =  {id: Date.now()}
  onClick(addcols)
  } 

  return (
    <button className='addbtn' onClick={addCount}><i className="fa-solid fa-square-plus"></i>&nbsp; add more cols</button>
  )
}

export default Colsbtn