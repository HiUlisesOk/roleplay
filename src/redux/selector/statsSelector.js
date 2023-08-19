import { createSelector } from "@reduxjs/toolkit";

export const getAllStatsSelector = createSelector(
    (state) => state.getAllStatsState,
    (getAllStats) => getAllStats
);


export const getStatsInfoSelector = createSelector(
    (state) => state.getStatsInfoState,
    (getStatsInfo) => getStatsInfo
);

/*

export const updateCharacterSelector = createSelector(
    (state) => state.updateCharacterState,
    (updateCharacter) => updateCharacter
);


export const getPostByTopicIDSelector = createSelector(
    (state) => state.postByTopicIDState,
    (getPostByTopicID) => getPostByTopicID
);


export const getCharacterByUserIdSelector = createSelector(
    (state) => state.getCharacterByUserIdState,
    (getCharacterByUserId) => getCharacterByUserId
);
*/