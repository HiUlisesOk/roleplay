import { createSelector } from "@reduxjs/toolkit";

export const createSheetSelector = createSelector(
    (state) => state.createSheetState,
    (createSheet) => createSheet
);

export const getSheetInfoSelector = createSelector(
    (state) => state.getSheetInfoState,
    (getSheetInfo) => getSheetInfo
);

export const getAllSheetsSelector = createSelector(
    (state) => state.getAllSheetsState,
    (getAllSheets) => getAllSheets
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

*/