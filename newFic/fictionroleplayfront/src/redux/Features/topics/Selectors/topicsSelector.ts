import { createSelector } from "@reduxjs/toolkit";

export const getLastActiveTopicsSelector = createSelector(
  (state) => state.lastActiveTopics,
  (lastActiveTopics) => lastActiveTopics
);

export const getTopicsByIdSelector = createSelector(
  (state) => state.getTopicsByIdState,
  (getTopicsByIdState) => getTopicsByIdState
);
