import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	loginReducer,
	registerReducer,
	uploadImageReducer,
	updateProfilePictureReducer,
	getUserByIdReducer
} from "./reducers/userReducer";
import {
	getAllTopicReducer,
	createTopicReducer,
	updateTopicTitleReducer,
	deleteTopicReducer,
	getLastActiveTopicsReducer,
	getTopicByIdReducer
} from './reducers/topicReducer';
import {
	getAllPostReducer,
	createPostReducer,
	updatePostReducer,
	getPostByTopicIDReducer,
	getPostByIdReducer
} from './reducers/postReducer.js';
import {
	createCharacterReducer,
	getAllCharactersReducer,
	getCharacterInfoReducer,
	updateCharacterReducer,
	getCharacterByUserIdReducer,
} from './reducers/characterReducer.js';

const userInfoLocalStorage =
	typeof window !== "undefined" && localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: null;

const userTokenLocalStorage =
	typeof window !== "undefined" && localStorage.getItem("userToken")
		? JSON.parse(localStorage.getItem("userToken"))
		: null;

const initialState = {
	userInfo: userInfoLocalStorage,
	userToken: userTokenLocalStorage
};

const reducers = combineReducers({
	userData: (state = initialState, action) => state, // No se necesita un reducer para el estado userData
	loginInfo: loginReducer,
	registerState: registerReducer,
	uploadImageState: uploadImageReducer,
	updateProfilePictureState: updateProfilePictureReducer,
	getUserByIdState: getUserByIdReducer,
	allTopicState: getAllTopicReducer,
	createTopicState: createTopicReducer,
	updateTopicTitleState: updateTopicTitleReducer,
	deleteTopicState: deleteTopicReducer,
	getAllPostState: getAllPostReducer,
	createPostState: createPostReducer,
	lastActiveTopicsState: getLastActiveTopicsReducer,
	updatePostState: updatePostReducer,
	topicByIdState: getTopicByIdReducer,
	postByTopicIDState: getPostByTopicIDReducer,
	getPostByIDState: getPostByIdReducer,
	createCharacterState: createCharacterReducer,
	getAllCharacterState: getAllCharactersReducer,
	getCharacterInfoState: getCharacterInfoReducer,
	getCharacterByUserIdState: getCharacterByUserIdReducer,
	updateCharacterState: updateCharacterReducer,
});

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== "production",
});
