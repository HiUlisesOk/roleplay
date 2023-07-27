import { createSelector } from "@reduxjs/toolkit";

export const createCharacterSelector = createSelector(
    (state) => state.createCharacterState,
    (createCharacter) => createCharacter
);

export const getAllCharacterSelector = createSelector(
    (state) => state.getAllCharacterState,
    (getAllCharacters) => getAllCharacters
);

/*

export const getPostByTopicIDSelector = createSelector(
    (state) => state.postByTopicIDState,
    (getPostByTopicID) => getPostByTopicID
);
export const getPostByIDSelector = createSelector(
    (state) => state.getPostByIDState,
    (getPostByID) => getPostByID
);

export const updatePostSelector = createSelector(
    (state) => state.updatePostState,
    (updatePost) => updatePost
);*/