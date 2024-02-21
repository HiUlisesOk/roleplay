import { createReducer } from "@reduxjs/toolkit";
import { getAllStats, getStatsInfo } from "../actions/statsActions";

const initialState = {
    loading: false,
    error: false,
    getAllStatsState: [],
    getStatsInfoState: [],
    //createStatsState: []

    //updateStatsState: [],
    //getStatsByUserIdState: [],
    // postByTopicIDState: [],
};

export const getAllStatsReducer = createReducer(initialState, builder => {
    builder.addCase(getAllStats.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(getAllStats.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.getAllStatsState = action.payload;
    });
    builder.addCase(getAllStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});

export const getStatsInfoReducer = createReducer(initialState, builder => {
    builder.addCase(getStatsInfo.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(getStatsInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.getStatsInfoState = action.payload;
    });
    builder.addCase(getStatsInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});
/*


export const updateCharacterReducer = createReducer(initialState, builder => {
    builder.addCase(updateCharacter.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(updateCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.updateCharacterState = action.payload;
        console.log(action);
    });
    builder.addCase(updateCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});


export const getPostByTopicIDReducer = createReducer(initialState, builder => {
    builder.addCase(getPostByTopicID.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(getPostByTopicID.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.postByTopicIDState = action.payload;
    });
    builder.addCase(getPostByTopicID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});


export const getCharacterByUserIdReducer = createReducer(initialState, builder => {
    builder.addCase(getCharacterByUserId.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(getCharacterByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.getCharacterByUserIdState = action.payload;
        console.log(action);
    });
    builder.addCase(getCharacterByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});

*/