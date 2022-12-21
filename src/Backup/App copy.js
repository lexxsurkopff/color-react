import './Styles/App.css'
import Chroma from 'chroma-js'
import { useState } from 'react'

function App() {
  let [hex, setBack] = useState('')
  function randColor() {
    const cols = Chroma.random()
    const hex = Chroma(cols).hex().toUpperCase()
    setBack(hex)
  }
  return (
    <div className="App">
    <div className='col' style={{background: hex}}>
      <div className='coltext'>
      <h3>{hex}</h3>
      </div>
      <button className='rld' onClick={randColor}><i className="fa-solid fa-rotate"></i></button>
    </div>
    
    </div>
  );
}

export default App;
