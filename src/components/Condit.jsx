import React from 'react'

const Condit = () => {
  const age = 17
  if(age > 18){
  return (
    <div>
      <Map/>
    </div>
  )
}else if (age == 18){
  return(
    <div>
    <Event2/>
    </div>
  )
}else{
  return(
    <div>
      <State/>
    </div>
  )
}
}

export default Condit
