import { createSelector } from "@reduxjs/toolkit";

export const getAllPostSelector = createSelector(
	(state) => state.getAllPostState,
	(getAllPost) => getAllPost
);

export const createPostSelector = createSelector(
	(state) => state.createPostState,
	(createPost) => createPost
);

export const updatePostSelector = createSelector(
	(state) => state.updatePostState,
	(updatePost) => updatePost
);