import React, { useEffect, useState } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const [mainMovie, setMainMovie] = useState(null);
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies) 
    const getRandomElement = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    }
    useEffect(() => {
        if (movies) {
            setMainMovie(getRandomElement(movies));

        }
    }, [movies])
    if (!movies) return;

    if (!mainMovie) return;
    const { original_title, overview, id } = mainMovie;

    return (
        <div className='w-screen aspect-video'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
