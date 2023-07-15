import { createReducer } from "@reduxjs/toolkit";
import { getAllTopic, createTopic, updateTopicTitle, deleteTopic, getLastActiveTopics } from "../actions/topicActions";

const initialState = {
	loading: false,
	error: false,
	allTopicState: {},
	createTopicState: {},
	updateTopicTile: {},
	deleteTopicState: {},
	lastActiveTopicsState: {}
};

export const getLastActiveTopicsReducer = createReducer(initialState, builder => {
	builder.addCase(getLastActiveTopics.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(getLastActiveTopics.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.lastActiveTopicsState = action.payload;
	});
	builder.addCase(getLastActiveTopics.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
});

export const getAllTopicReducer = createReducer(initialState, builder => {
	builder.addCase(getAllTopic.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(getAllTopic.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.allTopicState = action.payload;
	});
	builder.addCase(getAllTopic.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
});

export const createTopicReducer = createReducer(initialState, builder => {
	builder.addCase(createTopic.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(createTopic.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.createTopicState = action.payload;
		console.log('action', action);
	});
	builder.addCase(createTopic.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
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
	});
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
	});
});