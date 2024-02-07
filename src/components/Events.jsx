import React from 'react'

const Events = () => {
    const shoot = () => {
        alert("What a shot!")
    }
  return (
    <div>
      <button onClick={shoot}>Take the shot</button>
    </div>
  )
}

export default Events
