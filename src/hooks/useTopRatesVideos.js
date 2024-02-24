import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getTopRatedMovies();
    }, []);

    const getTopRatedMovies = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
                API_OPTIONS
            );
            const response = await data.json();
            dispatch(addTopRatedMovies(response.results));
        } catch (e) { }
    };
};
export default useTopRatedMovies;
