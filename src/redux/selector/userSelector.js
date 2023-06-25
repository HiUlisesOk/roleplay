import { createSelector } from "@reduxjs/toolkit";

export const loginSelector = createSelector(
	(state) => state.loginInfo,
	(Login) => Login
);

export const registerSelector = createSelector(
	(state) => state.registerState,
	(Register) => Register
);
