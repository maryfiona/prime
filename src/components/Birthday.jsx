import React, {useState} from 'react'
import personData from '../data/birthday'
import '../css/birthday.css'

const Birthday = () => {
    const [persons, setPersons] = useState(personData)

    const remove = (id) => {
      const newData = persons.filter(person => person.id !== id)
       setPersons(newData)
       }

    const render = persons.map((person,idx) => {
   return(
    <div key={idx}>
      <div className='each-birthday-container'>
        <img src={person.url} alt="birthday-image" />
        <p>Name: {person.name}</p>
        <p>Date: {person.date}</p>
        <p>Personality: {person.personality}</p>
        <button className='each-birthday-button' onClick={()=>remove(person.id)}>X</button>
    </div>
    </div>
   )
    })
      
  return (
    <div className='overall-birthday'>
<h1 style={{textAlign: 'center', margin: '1%' }}>{persons.length} {persons.length === 1?'Person':'People'} Available</h1>
    <div className='birthday-container'>
      {render}
    </div>
    </div>
  )
}

export default Birthday
