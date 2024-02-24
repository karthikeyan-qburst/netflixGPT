import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUpcomingMovies();
    }, []);

    const getUpcomingMovies = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
                API_OPTIONS
            );
            const response = await data.json();
            dispatch(addUpComingMovies(response.results));
        } catch (e) { }
    };
};
export default useUpcomingMovies;
