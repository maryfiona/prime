import React, {useState, useEffect}from 'react'
import movieData from '../data/movie'
import '../css/movie.css'

const Movie = () => {
    const [movies, setMovies] = useState(movieData)

    const remove = (id) => {
   const newData = movies.filter(movie => movie.id !== id)
    setMovies(newData)
    }
 const category = (category) => {
  const newCat = movieData.filter(movie => movie.category == category)
  setMovies(newCat)
 }
 const genre = (genre) => {
  const gen = movieData.filter(movie => movie.genre == genre)
  setMovies(gen)
 }

   const render = movies.map((movie, idx)=>{
    return(
      <div key={idx} >
        <div className='each-movie-container'>
        <img src={movie.url} alt="movie-image" />
        <p>Title: {movie.title}</p>
        <p>Genre: {movie.genre}</p>
        <p>Category: {movie.category}</p>
        <button className='each-movie-button' onClick={()=>remove(movie.id)}>X</button>
      </div>
      </div>
    )
    })

    const all = () => {
      setMovies(movieData)
    }

  return (
<div className='overall-movie'>
<h1 style={{textAlign: 'center', margin: '1%' }}>{movies.length} Movie{movies.length === 1?'':'s' } Available</h1>
<div className='movie-cat'>
  <div>
<ul>
  <li onClick={()=>category("Hollywood")}>Hollywood</li>
  <li onClick={()=>category("Nollywood")}>Nollywood</li>
  <li onClick={()=>category("Bollywood")}>Bollywood</li>
  <li onClick={()=>category("K.drama")}>K.drama</li>
</ul>
  </div>
  <div>
    <ul className='movie-cat-list'>
      <li onClick={all}>All&nbsp;Movies</li>
    </ul>
  </div>
  <div>
<ul>
  <li onClick={()=> genre("Action")}>Action</li>
  <li onClick={()=> genre("Mystery")}>Mystery</li>
  <li onClick={()=> genre("Thriller")}>Thriller</li>
  <li onClick={()=> genre("Romance")}>Romance</li>
</ul>
</div>
</div>

    <div className='movie-container'>
      {render}
    </div>
    </div>
  )
}

export default Movie
