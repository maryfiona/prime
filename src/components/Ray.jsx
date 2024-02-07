import React, {useState} from 'react'

const Ray = () => {
    const [text, setText]= useState('Ray, a drop of golden sun')
    
    const change = () => {
         setText(text => 'I would like a hamburger')
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <h1>{text}</h1>
     <button onClick = {change} style={{margin:'2%'}}>Change</button>
    </div>
  )
}

export default Ray
