import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useGetMovieVideos = (id) => {
    // const [trailer,setTrailer]= useState();
    const dispatch = useDispatch();
    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch(
                'https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US',
                API_OPTIONS
            );
            const response = await data.json();
            const filterData = response.results.filter((e) => e.type === "Trailer");
            const trailer = (filterData.length ? filterData[0] : response.results[0]);
            dispatch(addTrailerVideo(trailer));
        } catch (e) { }
    };

    // return trailer;
}
export default useGetMovieVideos;