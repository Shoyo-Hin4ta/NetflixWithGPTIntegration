import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gptPage",
    initialState : {
        isMovieRecommendationClicked : false,
        gptMovies : [],
        isRecommendBtnClicked : false,
        recommendedMovies : [],
    },
    reducers : {
        addOnClick : (state) => {
            state.isMovieRecommendationClicked = !state.isMovieRecommendationClicked;
        },
        addMovies : (state, action) => {
            state.gptMovies = action.payload
        },
        addisRecommendBtnClicked : (state) => {
            state.isRecommendBtnClicked = !state.isRecommendBtnClicked
        },
        addRecommendedMovies : (state, action) => {
            state.recommendedMovies = action.payload;
        }
    }

});


export const {addOnClick, addMovies, addisRecommendBtnClicked, addRecommendedMovies} = gptSlice.actions;

export default gptSlice.reducer;