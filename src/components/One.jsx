import React, {useState} from 'react'

const One = () => {
    const [color, setColor] = useState("blue")
    const toggle = () => {
        color === "blue" ? setColor("red") : setColor("blue")
  }
  return (
       <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <h1>This is the color {color}</h1>
     <button onClick = {toggle} style={{margin:'2%'}}>Toggle</button>
    </div>
  )
}

export default One