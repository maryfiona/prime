import React, { useState, useEffect } from 'react'

const HomeWork = () => {
  const [results, setResults] = useState([])

  const dataFetch = async (n) => {
      const apiUrl = await fetch(`https://randomuser.me/api/?results=${n}`)
      const data = await apiUrl.json()
      setResults(data.results)
    } 

  useEffect(() => {
    dataFetch(4)
  }, [])

  const render = results.map((result, idx) => (
    <div key={idx} style={{textAlign:'center', fontWeight:'bold', padding:'1rem'}}>
      <img src={result.picture.large} alt="user-image" style={{padding:'1rem', borderRadius:'50%'}} />
      <p>Gender: {result.gender}</p>
      <p>Name: {result.name.title} {result.name.first} {result.name.last}</p>
      <p>Age: {result.dob.age}</p>
      <p>
        Address: {result.location.street.number}, {result.location.street.name}, {result.location.city}, {result.location.state}, {result.location.country}
      </p>
      <p>Telephone: {result.phone}</p>
      <br />
      <br />
    </div>
  ))

  return <div>{render}</div>
}

export default HomeWork