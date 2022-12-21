import React from 'react'

import Cols from './Cols'


const Collist = (props) => {
     
  return (
    <div className='collist'>
       { props.num.map(ids => {
        return <Cols key={ids.id} ids={ids.id}/>
       }) }
      
    </div>
  )
}

export default Collist