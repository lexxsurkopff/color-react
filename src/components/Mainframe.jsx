
import React, { useState } from 'react'
import Collist from './Collist'
import Colsbtn from './Colsbtn'
import Context from './context'

const Mainframe = () => {
  let [qty, setQty] = useState([
    {id: Date.now()}
  ])
  function getCols (addcols) {
    setQty(qty.concat(addcols).slice(-5))
  } 
  function removeCols (id) {
    setQty(qty.filter(col => col.id !== id))
  }
  
  return (
    <Context.Provider value = {{ removeCols }}>
    <div className='mainframe'>
    <div className='main'>
    <Collist num={qty}/>
    </div>
    <div className='lowbtns'>
    <Colsbtn onClick={getCols}/>
    
    </div>
    </div>
    </Context.Provider>
  )
}

export default Mainframe