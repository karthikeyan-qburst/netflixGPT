import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
                API_OPTIONS
            );
            const response = await data.json();
            dispatch(addPopularMovies(response.results));
        } catch (e) { }
    };
};
export default usePopularMovies;
