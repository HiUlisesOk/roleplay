import { createReducer } from "@reduxjs/toolkit";
import { getAllTopic, createTopic } from "../actions/topicActions";

const initialState = {
	loading: false,
	error: false,
	allTopicState : {},
	createTopicState : {},
};

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
	})
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
		console.log(action);
	});
	builder.addCase(createTopic.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});