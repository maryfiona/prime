import React from 'react'

const Events2 = () => {
    const freekick = (data) => {
        alert(data)
    }
  return (
    <div>
      <button onClick={()=>freekick("Take the shot")}><h1>That was a foul</h1></button>
    </div>
  )
}

export default Events2
