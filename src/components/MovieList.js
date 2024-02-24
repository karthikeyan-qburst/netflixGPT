import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies) return;
    return (
        <div className='px-6 text-white'>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <div className='flex overflow-x-scroll py-2'>

                <div className='flex'>
                    {movies.map((movie) =>
                        <MovieCard key={movie.id} poster_path={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList
