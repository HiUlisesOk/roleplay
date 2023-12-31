import { createSelector } from "@reduxjs/toolkit";

export const createCharacterSelector = createSelector(
    (state) => state.createCharacterState,
    (createCharacter) => createCharacter
);

export const getAllCharacterSelector = createSelector(
    (state) => state.getAllCharacterState,
    (getAllCharacters) => getAllCharacters
);

export const getCharacterInfoSelector = createSelector(
    (state) => state.getCharacterInfoState,
    (getCharacterInfo) => getCharacterInfo
);

export const updateCharacterSelector = createSelector(
    (state) => state.updateCharacterState,
    (updateCharacter) => updateCharacter
);

/*

export const getPostByTopicIDSelector = createSelector(
    (state) => state.postByTopicIDState,
    (getPostByTopicID) => getPostByTopicID
);

*/

export const getCharacterByUserIdSelector = createSelector(
    (state) => state.getCharacterByUserIdState,
    (getCharacterByUserId) => getCharacterByUserId
);