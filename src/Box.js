import React, { useState } from 'react'
import './App.css'
import Boxes from './boxes'

const Box = (props) => {
    const [on,setOn]= useState(props.on)
    const styles={
        backgroundColor: on ? "#222222" : "transparent"
    }
    function change(){
        setOn(prev=>!prev)
        return 
    }
  return (
    <div className='box' 
        onClick={props.toggle} 
        key={props.key} style={styles}>
          box {props.id}
    </div>
  )
}

export default Box