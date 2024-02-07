import React from 'react'
import TinyThing from './TinyThing'
import State from './State'

const Condit2 = () => {
    const age = 17
  return (
    <div>
 { age > 18  ?  <TinyThing/> :  <State/> }
    </div>
  )
}

export default Condit2
