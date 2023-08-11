import { createReducer } from "@reduxjs/toolkit";
import { createCharacter, getAllCharacters, getCharacterInfo, updateCharacter, getCharacterByUserId } from "../actions/characterActions.js";


const initialState = {
    loading: false,
    error: false,
    createCharacterState: {},
    getAllCharactersState: {},
    getCharacterInfoState: {},
    updateCharacterState: {},
    getCharacterByUserIdState: {},
    // postByTopicIDState: {},
};

export const createCharacterReducer = createReducer(initialState, builder => {
    builder.addCase(createCharacter.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(createCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.createCharacterState = action.payload;
        console.log(action);
    });
    builder.addCase(createCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});

export const getAllCharactersReducer = createReducer(initialState, builder => {
    builder.addCase(getAllCharacters.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(getAllCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.getAllCharactersState = action.payload;
    });
    builder.addCase(getAllCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});


export const getCharacterInfoReducer = createReducer(initialState, builder => {
    builder.addCase(getCharacterInfo.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(getCharacterInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.getCharacterInfoState = action.payload;
    });
    builder.addCase(getCharacterInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});

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