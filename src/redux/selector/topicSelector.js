import { createSelector } from "@reduxjs/toolkit";

export const getAllTopicSelector = createSelector(
	(state) => state.allTopicState,
	(getAllTopic) => getAllTopic
);

export const createTopicSelector = createSelector(
	(state) => state.createTopicState,
	(createTopic) => createTopic
);