import React, { useContext } from 'react'
import Context from './context';

const Delcol = (props) => {
  const {removeCols} = useContext(Context)
      
       return (
         <button className='rld' onClick={() => removeCols(props.id)}><i className="fa-solid fa-trash"></i></button>
       )
     
}

export default Delcol