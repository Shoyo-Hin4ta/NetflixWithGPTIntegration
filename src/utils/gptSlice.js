import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gptPage",
    initialState : {
        isMovieRecommendationClicked : false,
        gptMovies : [],
        isRecommendBtnClicked : false,
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
    }

});


export const {addOnClick, addMovies, addisRecommendBtnClicked} = gptSlice.actions;

export default gptSlice.reducer;