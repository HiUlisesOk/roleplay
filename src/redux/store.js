import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	loginReducer,
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
});

export const store = configureStore({
	reducer: reducers,
	preloadedState: initialState,
	devTools: process.env.NODE_ENV !== "production",
});