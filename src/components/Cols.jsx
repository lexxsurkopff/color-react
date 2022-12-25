import React from 'react'
import { useState } from 'react';
import Chroma from 'chroma-js'
import Rldbtn from './Rldbtn';
import Coltext from './Coltext';
import Compbtn from './Compbtn';
import Comps from './Comps';
import Splitcol from './Splitcol';
import Splitbtn from './Splitbtn';
import AngleInput from './AngleInput';
import Setsat from './Setsat';
import Setlum from './Setlum'
import Delcol from './Delcol';
import Bezierall from './Bezierall';
import Bezierbtn from './Bezierbtn';


const Cols = (ids) => {
    let [ColObj, setHex] = useState({
      startcol: '',
      endcol: ''
    })
    let [visCompObj, setCompVis] = useState({
      visComp: ''
    })
    let [visSplitObj, setSplitVis] = useState({
      visSplit: ''
    })
    let [gradeVisObj, setGradeVis] = useState({
      gradeVis: ''
    })
    const hexCol = (colColObj) => {
      setHex(colColObj)
    }
    const getVisComp = (visCompObj) => {
    setCompVis(visCompObj)
    } 
    const getVisSplit = (visSplitObj) => {
    setSplitVis(visSplitObj)
    }
    const getVisGrade = (gradeVisObj) => {
      setGradeVis(gradeVisObj) 
    }
    const [angle, setAngle] = useState(50) 
    const splitAngle = (angle) => {
      setAngle(angle)
    }
    const [sat, setSat] = useState(50) 
    const getSat = (sat) => {
      setSat(sat)
    }
    const [lum, setLum] = useState(50) 
      const getLum = (Lum) => {
      setLum(Lum)
    } 
    
    if (ColObj.startcol !== '') { 
      const oldcolor = Chroma(ColObj.startcol).hsl()
      const h = oldcolor[0]
      const s = sat/100 
      const l = lum/100
      const newcolor = Chroma.hsl([h, s, l, 1]).hex().toUpperCase()
      ColObj.startcol = newcolor
    
    } else {
      ColObj.startcol = ''
    }
    if (ColObj.endcol !== '') { 
      const oldcolor2 = Chroma(ColObj.endcol).hsl()
      const h2 = oldcolor2[0]
      const s2 = sat/100 
      const l2 = lum/100
      const newcolor2 = Chroma.hsl([h2, s2, l2, 1]).hex().toUpperCase()
      ColObj.endcol = newcolor2
      } else {
        ColObj.endcol = ''
      }
    
  return (
    <div className='colcontainer'>
    <div className='col' style={{background: ColObj.startcol}}>
      <Splitcol angle={angle} text={ColObj.startcol} id={ids.ids} vis={visSplitObj.visSplit}/>
      <AngleInput onChange={splitAngle} value={angle} isVisible={ColObj.startcol} vis={visSplitObj.visSplit}/>
      <Comps inColor={ColObj.endcol} vis={visCompObj.visComp}  id={ids.ids}/> 
      <Coltext text={ColObj.startcol}/>
      <Bezierbtn isVisible={ColObj.startcol} onClick={getVisGrade} id={ids.ids}/>
      <Splitbtn isVisible={ColObj.startcol} onClick={getVisSplit} setid={ids.ids}/>
      <Compbtn isVisible={ColObj.startcol} onClick={getVisComp} setid={ids.ids}/>
      <Rldbtn onClick={hexCol}/>
      <Setsat onChange={getSat} isVisible={ColObj.startcol}/>
      <Setlum onChange={getLum} isVisible={ColObj.startcol}/>
      <Delcol id={ids.ids}/> 
     
    </div>
    <Bezierall isVis={ColObj.startcol} seccol = {ColObj.endcol} id={ids.ids} vis={gradeVisObj.gradeVis}/>
    </div>
  )

}

export default Cols