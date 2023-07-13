import { createSelector } from "@reduxjs/toolkit";

export const getAllPostSelector = createSelector(
	(state) => state.getAllPostState,
	(getAllPost) => getAllPost
);

export const createPostSelector = createSelector(
	(state) => state.createPostState,
	(createPost) => createPost
);

/*
export const updateTopicTitleSelector = createSelector(
	(state) => state.updateTopicTitleState,
	(updateTopicTitle) => updateTopicTitle
);

export const deleteTopicSelector = createSelector(
	(state) => state.deleteTopicState,
	(deleteTopic) => deleteTopic
);*/