import React from 'react'

function PreventDefault  () {
 const prev = (event) => {
    event.preventDefault();
    console.log("You clicked me")
 }

 return (
    <div style={{textAlign: 'center'}}>
      <h1>Show me the meaning</h1>
      <a href = "https://newhorizons.com" onClick={prev}> New Horizons </a>
    </div>
  )
}

export default PreventDefault ()
