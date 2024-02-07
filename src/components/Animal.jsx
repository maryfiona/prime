 import React from 'react'
 
const Animal = (props) => {
  return (
    <div>
     <h1> He also has a {props.species.color} {props.species.cat} </h1> 
    </div>
  )
}

export default Animal











// import { useState } from 'react'
// import  ReactDOM  from 'react-dom/client'

// function Animals () {
//      const [color, setColor] = useState("red")
//      const [animal, setAnimal] = useState("tiger")
//   return (
//     <div>
//       <h2>He also has a {color} {animal}</h2>
//     </div>
//   )
//} 
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Animals />);