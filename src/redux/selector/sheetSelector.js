import { createSelector } from "@reduxjs/toolkit";

export const createSheetSelector = createSelector(
    (state) => state.createSheetState,
    (createSheet) => createSheet
);

export const getSheetInfoSelector = createSelector(
    (state) => state.getSheetInfoState,
    (getSheetInfo) => getSheetInfo
);

export const getSheetByCharIdSelector = createSelector(
    (state) => state.getSheetByCharIdState,
    (getSheetByCharId) => getSheetByCharId
);

export const getAllSheetsSelector = createSelector(
    (state) => state.getAllSheetsState,
    (getAllSheets) => getAllSheets
);

export const updateSheetSelector = createSelector(
    (state) => state.updateSheetState,
    (updateSheet) => updateSheet
);
/*



export const getPostByTopicIDSelector = createSelector(
    (state) => state.postByTopicIDState,
    (getPostByTopicID) => getPostByTopicID
);

*/