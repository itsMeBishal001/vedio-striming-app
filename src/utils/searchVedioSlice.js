import { createSlice } from "@reduxjs/toolkit";
const searchVedioSlice = createSlice({
    name: "searchVedios",
    initialState: { vedios: [], },
    reducers: {
        updateSearchVedioContainer: (state,actions) => {
            state.vedios = actions.payload;
        },
    },
    
});
export const {updateSearchVedioContainer } = searchVedioSlice.actions;
export default searchVedioSlice.reducer;