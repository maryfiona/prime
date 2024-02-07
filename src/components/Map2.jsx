import React from 'react'

const Map2 = () => {
    const data = [
        {id: 1, name: "Faruq"},
        {id: 2, name: "Fade"},
        {id: 3, name: "Dami"},
        {id: 4, name: "Aesha"},
        
    ]
  return (
    <div>
        {
      students.map((student, idx) => { 
        return(
            <div key = {idx}>
                <h1>{student.name} is good</h1>
            </div>
        )
      })
      }
    </div>
  )
}

export default Map2
