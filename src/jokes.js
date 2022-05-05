import React, { useState } from 'react'
import joker from './joker';


function Jokes (props) {
  const a = props.punchline;
    const shoot = () => {
        alert(a);
      }
      const [isShown, setIsShown]=useState(false)
      function toggleShown(){
        setIsShown(prevState=>!prevState)
      }
    
  return (
    <div>
             <h3>{props.setup}</h3>
            <h2>{isShown && props.punchline}</h2>
            <button onClick={toggleShown}>Show punch line</button>
            <hr />
            
    </div>
  )
}

export default Jokes