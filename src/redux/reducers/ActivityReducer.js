import { createReducer } from "@reduxjs/toolkit";
import { getActivity, getLastActivity, getMostActiveUsers } from "../actions/activityActions";



const initialState = {
	loading: false,
	error: false,
	getActivityState: {},
	getLastActivityState: {},
	getMostActiveUsersState: {}
};


export const getActivityReducer = createReducer(initialState, builder => {
	builder.addCase(getActivity.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(getActivity.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.getActivityState = action.payload;
		console.log(action);
	});
	builder.addCase(getActivity.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});

export const getLastActivityReducer = createReducer(initialState, builder => {
	builder.addCase(getLastActivity.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(getLastActivity.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.getLastActivityState = action.payload;
		console.log(action);
	});
	builder.addCase(getLastActivity.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});

export const getMostActiveUsersReducer = createReducer(initialState, builder => {
	builder.addCase(getLastActivity.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(getMostActiveUsers.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.getMostActiveUsersState = action.payload;
		console.log(action);
	});
	builder.addCase(getMostActiveUsers.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});