import { createReducer } from "@reduxjs/toolkit";

import { Login } from "../actions/userActions";

const initialState = {
	loading: false,
	error: false,
	loginInfo: {},
};

export const loginReducer = createReducer(initialState, builder => {
	builder.addCase(Login.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(Login.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.loginInfo = action.payload;
		console.log(action);
	});
	builder.addCase(Login.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});