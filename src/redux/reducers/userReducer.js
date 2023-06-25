import { createReducer } from "@reduxjs/toolkit";

import { Login, Register } from "../actions/userActions";

const initialState = {
	loading: false,
	error: false,
	loginInfo: {},
	registerState: {},
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

export const registerReducer = createReducer(initialState, builder => {
	builder.addCase(Register.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(Register.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.registerState = action.payload;
		console.log(action);
	});
	builder.addCase(Register.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});