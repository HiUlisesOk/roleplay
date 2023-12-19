import { createReducer } from "@reduxjs/toolkit";

import { Login, Register, uploadImage, updateProfilePicture, getUserById, getUserRolesById, getMyInfo } from "../actions/userActions";

const initialState = {
	loading: false,
	error: false,
	loginInfo: {},
	registerState: {},
	uploadImageState: {},
	updateProfilePictureState: {},
	getUserByIdState: {},
	getUserRolesByIdState: {},
	getMyInfoState: {}
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

export const getUserByIdReducer = createReducer(initialState, builder => {
	builder.addCase(getUserById.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(getUserById.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.getUserByIdState = action.payload;
		console.log(action);
	});
	builder.addCase(getUserById.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});

export const getMyInfoReducer = createReducer(initialState, builder => {
	builder.addCase(getMyInfo.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(getMyInfo.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.getMyInfoState = action.payload;

	});
	builder.addCase(getMyInfo.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});

export const getUserRolesByIdReducer = createReducer(initialState, builder => {
	builder.addCase(getUserRolesById.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	});
	builder.addCase(getUserRolesById.fulfilled, (state, action) => {
		state.loading = false;
		state.error = false;
		state.getUserRolesByIdState = action.payload;
		console.log(action);
	});
	builder.addCase(getUserRolesById.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	})
});