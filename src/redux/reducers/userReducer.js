import { createReducer } from "@reduxjs/toolkit";

import { Login, Register, uploadImage, updateProfilePicture } from "../actions/userActions";

const initialState = {
	loading: false,
	error: false,
	loginInfo: {},
	registerState: {},
	uploadImageState: {},
	updateProfilePictureState: {}
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


export const uploadImageReducer = createReducer(initialState, builder => {
	builder.addCase(uploadImage.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(uploadImage.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.uploadImageState = action.payload;
		console.log(action);
	});
	builder.addCase(uploadImage.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});

export const updateProfilePictureReducer = createReducer(initialState, builder => {
	builder.addCase(updateProfilePicture.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(updateProfilePicture.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.updateProfilePictureState = action.payload;
		console.log(action);
	});
	builder.addCase(updateProfilePicture.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});