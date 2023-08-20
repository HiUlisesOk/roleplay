import { createSelector } from "@reduxjs/toolkit";

export const startBattleSelector = createSelector(
    (state) => state.startBattleState,
    (startBattle) => startBattle
);

export const takeTurnSelector = createSelector(
    (state) => state.takeTurnState,
    (takeTurn) => takeTurn
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
export const createPostSelector = createSelector(
    (state) => state.createPostState,
    (createPost) => createPost
);
export const updatePostSelector = createSelector(
    (state) => state.updatePostState,
    (updatePost) => updatePost
);
*/