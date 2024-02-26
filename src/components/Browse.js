import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPT from "./GPT";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../redux/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store?.gpt?.showGptSearch);
  // useNowPlayingMovies();
  // usePopularMovies();
  // useTopRatedMovies();
  // useUpcomingMovies();
  dispatch(getNowPlayingMovies())
  dispatch(getPopularMovies())
  dispatch(getTopRatedMovies())
  dispatch(getUpcomingMovies())

  return (
    <div>
      <Header />

      {showGptSearch ? <GPT /> : <div className="bg-black">
        <MainContainer />
        <SecondaryContainer />
      </div>}

    </div>
  );
};

export default Browse;
