import { createSlice } from "@reduxjs/toolkit";

const langSlice  = createSlice({
    name : "languages",
    initialState : {
        lang : "en",
    },
    reducers : {
        setLanguage : (state, action) => {
            state.lang = action.payload;
        },
    }
})

export const {setLanguage} = langSlice;


export default langSlice.reducer;