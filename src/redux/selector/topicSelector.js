import { createSelector } from "@reduxjs/toolkit";

export const getAllTopicSelector = createSelector(
	(state) => state.allTopicState,
	(getAllTopic) => getAllTopic
);

export const getTopicByIdSelector = createSelector(
	(state) => state.topicByIdState,
	(getTopicById) => getTopicById
);

export const getLastActiveTopicsSelector = createSelector(
	(state) => state.lastActiveTopicsState,
	(getLastActiveTopics) => getLastActiveTopics
);

export const createTopicSelector = createSelector(
	(state) => state.createTopicState,
	(createTopic) => createTopic
);

export const updateTopicTitleSelector = createSelector(
	(state) => state.updateTopicTitleState,
	(updateTopicTitle) => updateTopicTitle
);

export const deleteTopicSelector = createSelector(
	(state) => state.deleteTopicState,
	(deleteTopic) => deleteTopic
);