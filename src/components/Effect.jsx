import React, {useEffect, useState} from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        },1000)
    }, [])
  return (
    <div>
    <h1>The current count is {count}</h1>
    </div>
  )
}

export default Effect
