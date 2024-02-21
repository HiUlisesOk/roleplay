import { createReducer } from "@reduxjs/toolkit";
import { createSheet, getSheetInfo, getAllSheets, getSheetByCharId, updateSheet } from "../actions/sheetActions.js";


const initialState = {
    loading: false,
    error: false,
    createSheetState: [],
    getSheetInfoState: [],
    getAllSheetsState: [],
    getSheetByCharIdState: [],
    updateSheetState: [],
    // postByTopicIDState: [],
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
export const getSheetByCharIdReducer = createReducer(initialState, builder => {
    builder.addCase(getSheetByCharId.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(getSheetByCharId.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.getSheetByCharIdState = action.payload;
    });
    builder.addCase(getSheetByCharId.rejected, (state, action) => {
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

export const updateSheetReducer = createReducer(initialState, builder => {
    builder.addCase(updateSheet.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(updateSheet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.updateSheetState = action.payload;
        console.log(action);
    });
    builder.addCase(updateSheet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});
/*






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
