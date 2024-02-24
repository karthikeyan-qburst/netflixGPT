import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatesVideos";
import GPT from "./GPT";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store?.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

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
