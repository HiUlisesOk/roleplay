import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	loginReducer, registerReducer, uploadImageReducer, updateProfilePictureReducer
} from "./reducers/userReducer";



const userInfoLocalStorage =
	typeof window != "undefined"
		? localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null
		: null;

const initialState = {
	login: { userInfo: userInfoLocalStorage },
};

const reducers = combineReducers({
	loginInfo: loginReducer,
	registerState: registerReducer,
	uploadImageState: uploadImageReducer,
	updateProfilePictureState: updateProfilePictureReducer
});

export const store = configureStore({
	reducer: reducers,
	login: initialState,
	devTools: process.env.NODE_ENV !== "production",
});