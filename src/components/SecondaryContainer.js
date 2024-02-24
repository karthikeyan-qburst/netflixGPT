import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store?.movies);
    return (movies && (
        <div className='relative -mt-48 z-20'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
        </div>
    ))
}

export default SecondaryContainer
