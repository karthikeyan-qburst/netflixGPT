import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_OPTIONS } from "../utils/constants";

export const getNowPlayingMovies = createAsyncThunk('movies/nowPlaying', () => {
    return fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS
    ).then((resp) => resp.json()).catch((err) => console.log(err));
})

export const getPopularMovies = createAsyncThunk('movies/popular', () => {
    return fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS
    ).then((resp) => resp.json()).catch((err) => console.log(err));
})

export const getTopRatedMovies = createAsyncThunk('movies/top_rated', () => {
    return fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS
    ).then((resp) => resp.json()).catch((err) => console.log(err));
})

export const getUpcomingMovies = createAsyncThunk('movies/upcoming', () => {
    return fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS
    ).then((resp) => resp.json()).catch((err) => console.log(err));
})
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null
    },
    reducers: {
        // addNowPlayingMovies: (state, action) => {
        //     state.nowPlayingMovies = action.payload
        // },
        // addPopularMovies: (state, action) => {
        //     state.popularMovies = action.payload
        // },
        // addTopRatedMovies: (state, action) => {
        //     state.topRatedMovies = action.payload
        // },
        // addUpComingMovies: (state, action) => {
        //     state.upComingMovies = action.payload
        // },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNowPlayingMovies.pending, (state) => {
            state.nowPlayingMovies = [];
        })
        builder.addCase(getNowPlayingMovies.fulfilled, (state, action) => {
            state.nowPlayingMovies = action.payload.results;
        })
        builder.addCase(getNowPlayingMovies.rejected, (state) => {
            state.nowPlayingMovies = [];
        })
        builder.addCase(getPopularMovies.pending, (state) => {
            state.popularMovies = [];
        })
        builder.addCase(getPopularMovies.fulfilled, (state, action) => {
            state.popularMovies = action.payload.results;
        })
        builder.addCase(getPopularMovies.rejected, (state) => {
            state.popularMovies = [];
        })
        builder.addCase(getTopRatedMovies.pending, (state) => {
            state.topRatedMovies = [];
        })
        builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
            state.topRatedMovies = action.payload.results;
        })
        builder.addCase(getTopRatedMovies.rejected, (state) => {
            state.topRatedMovies = [];
        })
        builder.addCase(getUpcomingMovies.pending, (state) => {
            state.upComingMovies = [];
        })
        builder.addCase(getUpcomingMovies.fulfilled, (state, action) => {
            state.upComingMovies = action.payload.results;
        })
        builder.addCase(getUpcomingMovies.rejected, (state) => {
            state.upComingMovies = [];
        })
    }
})
export const { addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies } = movieSlice.actions;
export default movieSlice.reducer;