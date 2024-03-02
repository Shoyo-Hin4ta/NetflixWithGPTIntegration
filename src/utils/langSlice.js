import { createSlice } from "@reduxjs/toolkit";

const langSlice  = createSlice({
    name : "language",
    initialState : {
        lang : "en",
    },
    reducers : {
        setLanguage : (state, action) => {
            state.lang = action.payload;
        },
    }
})

export const {setLanguage} = langSlice.actions;


export default langSlice.reducer;