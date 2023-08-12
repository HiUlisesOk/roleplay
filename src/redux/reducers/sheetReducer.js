import { createReducer } from "@reduxjs/toolkit";
import { createSheet, getSheetInfo, getAllSheets } from "../actions/sheetActions.js";


const initialState = {
    loading: false,
    error: false,
    createSheetState: {},
    getSheetInfoState: {},
    getAllSheetsState: {},
    // updateSheetState: {},
    // postByTopicIDState: {},
};

export const createSheetReducer = createReducer(initialState, builder => {
    builder.addCase(createSheet.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(createSheet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.createSheetState = action.payload;
        console.log(action);
    });
    builder.addCase(createSheet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});

export const getSheetInfoReducer = createReducer(initialState, builder => {
    builder.addCase(getSheetInfo.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(getSheetInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.getSheetInfoState = action.payload;
    });
    builder.addCase(getSheetInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});

export const getAllSheetsReducer = createReducer(initialState, builder => {
    builder.addCase(getAllSheets.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(getAllSheets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.getAllSheetsState = action.payload;
    });
    builder.addCase(getAllSheets.rejected, (state, action) => {
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



*/
