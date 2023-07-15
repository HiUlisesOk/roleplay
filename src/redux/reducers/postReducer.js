import { createReducer } from "@reduxjs/toolkit";
import { getAllPost, createPost, updatePost } from "../actions/postActions.js";


const initialState = {
	loading: false,
	error: false,
	getAllPostState: {},
	createPostState: {},
	updatePostState: {},
};

export const getAllPostReducer = createReducer(initialState, builder => {
	builder.addCase(getAllPost.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(getAllPost.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.getAllPostState = action.payload;
	});
	builder.addCase(getAllPost.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
});

export const createPostReducer = createReducer(initialState, builder => {
	builder.addCase(createPost.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(createPost.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.createPostState = action.payload;
		console.log(action);
	});
	builder.addCase(createPost.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
});

export const updatePostReducer = createReducer(initialState, builder => {
	builder.addCase(updatePost.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(updatePost.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.updatePostState = action.payload;
		console.log(action);
	});
	builder.addCase(updatePost.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
});
