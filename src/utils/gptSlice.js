import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gptPage",
    initialState : {
        isMovieRecommendationClicked : false,
    },
    reducers : {
        addOnClick : (state) => {
            state.isMovieRecommendationClicked = !state.isMovieRecommendationClicked;
        }
    }

});


export const {addOnClick} = gptSlice.actions;

export default gptSlice.reducer;