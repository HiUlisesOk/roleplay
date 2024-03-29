import { createReducer } from "@reduxjs/toolkit";
import { startBattle, takeTurn } from "../actions/battleActions";

const initialState = {
    loading: false,
    error: false,
    startBattleState: [],
    takeTurnState: []
    // postByTopicIDState: [],
};

export const startBattleReducer = createReducer(initialState, builder => {
    builder.addCase(startBattle.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(startBattle.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.startBattleState = action.payload;
    });
    builder.addCase(startBattle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});

export const takeTurnReducer = createReducer(initialState, builder => {
    builder.addCase(takeTurn.pending, (state, action) => {
        state.loading = true;
        state.error = false;
    });
    builder.addCase(takeTurn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.takeTurnState = action.payload;
    });
    builder.addCase(takeTurn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
});

/*

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