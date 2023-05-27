"use client"
import React, { useState, useEffect } from 'react';
import { movieData } from './movieData';
import Link from 'next/link';
const MovieApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [notfound, setNotfound] = useState(false)

  useEffect(() => {
    setMovies(movieData)
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
    if (event.target.value) {
      const searchedMovie = movieData.filter((movie) => {
        const title = movie?.Title.toLowerCase()
        return title.includes(event.target.value.toLowerCase())
      })
      setMovies(searchedMovie)
    } else {
      setMovies(movieData)

    }
  };


  return (
    <div >
      <div className='bg-blue-950 flex h-20 justify-between p-2'>
        <h1 className='text-bold text-white text-4xl pt-3 ml-2'>Our Movies</h1>
        <div className=' h-10 mt-4 mr-4  rounded-md'>
          <input
            className='rounded-md h-10'
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className='bg-blue-500 h-10 p-2 text-white rounded-md'>Search</button>
          <Link href='/'><button className='bg-white h-10 p-2 ml-2 text-black rounded-md'>Logout</button></Link>
        </div>

      </div>



      <div className='flex flex-wrap'>

        {notfound ? <b className='text-3xl text-red-700 mr-[50%] mt-[50%]'>Data not Found</b> : null}
        {movies?.map((movie, id) => (
          <div
            className="flex flex-col w-96 m-1 bg-white border border-gray-200 rounded-lg shadow   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            key={id}>
            <img
              className="bg-cover h-72 w-full rounded-lg md:w-ful md:rounded-none md:rounded-l-lg md:rounded-r-lg"
              src={movie.Poster}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.Title}
              </h5>
              <p>{movie.Runtime}</p>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MovieApp;
