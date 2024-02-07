import React, {useState, useEffect} from 'react'

const Homework = () => {
    const [results, setResults] = useState([])

    const dataFetch = async () => {
            const apiUrl = await fetch("https://randomuser.me/api/?results=5")
            const data = await apiUrl.json()
            setResults(print)
    }
    useEffect(() => {
        dataFetch(5)
    },[] )
    const render = results.map ((result, idx) => {
  return (
        <div key = {idx}>
            <p>Picture: {result.picture.large}</p>,
            <p>Gender: {result.gender}</p>,
            <p>Name:{result.name.title}, {result.name.first}, {result.name.last}</p>,
            <p>Age: {result.dob.age}</p>,
            Address: {result.location.number}, {result.location.name}, {result.location.city}, {result.location.state}, {result.location.country} <br/> <br/>
            Telephone: {result.phone}       
        </div>
    )
})
return (
    <div className='fetch-container'>
         {render}
        </div>)
}

export default Homework
