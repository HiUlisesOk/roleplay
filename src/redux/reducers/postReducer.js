import { createReducer } from "@reduxjs/toolkit";
import { getAllPost , createPost } from "../actions/postActions.js"


const initialState = {
	loading: false,
	error: false,
	getAllPostState : {},
	createPostState: {},
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
	})
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
	})
});



/*

export const createTopicReducer = createReducer(initialState, builder => {
	builder.addCase(createTopic.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(createTopic.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.createTopicState = action.payload;
		console.log(action);
	});
	builder.addCase(createTopic.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});
export const updateTopicTitleReducer = createReducer(initialState, builder => {
	builder.addCase(updateTopicTitle.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(updateTopicTitle.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.updateTopicTitle = action.payload;
		console.log(action);
	});
	builder.addCase(updateTopicTitle.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});
export const deleteTopicReducer = createReducer(initialState, builder => {
	builder.addCase(deleteTopic.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(deleteTopic.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.deleteTopic = action.payload;
		console.log(action);
	});
	builder.addCase(deleteTopic.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});*/