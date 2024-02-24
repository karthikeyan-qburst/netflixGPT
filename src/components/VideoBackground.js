import React from 'react'
import useGetMovieVideos from '../hooks/useGetMovieVideos'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {
    // const trailer = useGetMovieVideos(movieId);
    useGetMovieVideos(movieId);

    const trailer = useSelector((store) => store?.movies?.trailerVideo)
    return (
        <div className='absolute'>
            <iframe  className="w-screen aspect-video"src={"https://www.youtube.com/embed/" + trailer?.key+"?autoplay=1&mute=1&loop=1&playlist="+trailer?.key}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    )
}

export default VideoBackground
