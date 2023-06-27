import { createSelector } from "@reduxjs/toolkit";

export const loginSelector = createSelector(
	(state) => state.loginInfo,
	(Login) => Login
);

export const registerSelector = createSelector(
	(state) => state.registerState,
	(Register) => Register
);

export const uploadImageSelector = createSelector(
	(state) => state.uploadImageState,
	(uploadImage) => uploadImage
);

export const updateProfilePictureSelector = createSelector(
	(state) => state.updateProfilePictureState,
	(updateProfilePicture) => updateProfilePicture
);