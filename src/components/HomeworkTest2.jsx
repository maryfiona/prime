import React, { useState, useEffect } from 'react';

const HomeWorkTest2 = () => {
  const [results, setResults] = useState([]);

  const dataFetch = async () => {
    // try {
      const apiUrl = await fetch("https://randomuser.me/api/?results");
      const data = await apiUrl.json();
      setResults(data.results);

//      } catch (error) {
//        console.error("Error fetching data:", error);
//      }
  };

  useEffect(() => {
    dataFetch(5);
  }, []);

  const render = results.map((result, idx) => (
    <div key={idx}>
      <img src={result.picture.large} alt={`Profile ${idx}`} />
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
  ));

  return <div className='fetch-container'>{render}</div>;
};

export default HomeWorkTest2;