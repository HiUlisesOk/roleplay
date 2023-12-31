import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	loginReducer,
	registerReducer,
	uploadImageReducer,
	updateProfilePictureReducer,
	getUserByIdReducer,
	getUserRolesByIdReducer,
	getMyInfoReducer,
} from "./reducers/userReducer";
import {
	getAllTopicReducer,
	createTopicReducer,
	updateTopicTitleReducer,
	deleteTopicReducer,
	getLastActiveTopicsReducer,
	getTopicByIdReducer,
	getTopicByUserIdReducer
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
import {
	createSheetReducer,
	getSheetInfoReducer,
	getAllSheetsReducer,
	getSheetByCharIdReducer,
	updateSheetReducer
} from './reducers/sheetReducer.js';
import {
	getAllStatsReducer,
	getStatsInfoReducer
} from './reducers/statsReducer.js';
import {
	startBattleReducer,
	takeTurnReducer
} from "./reducers/battleReducer";
import { getActivityReducer, getLastActivityReducer, getMostActiveUsersReducer } from "./reducers/ActivityReducer.js";


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
	createSheetState: createSheetReducer,
	getSheetInfoState: getSheetInfoReducer,
	getAllSheetsState: getAllSheetsReducer,
	getSheetByCharIdState: getSheetByCharIdReducer,
	updateSheetState: updateSheetReducer,
	getUserRolesByIdState: getUserRolesByIdReducer,
	getAllStatsState: getAllStatsReducer,
	getStatsInfoState: getStatsInfoReducer,
	startBattleState: startBattleReducer,
	takeTurnState: takeTurnReducer,
	getMyInfoState: getMyInfoReducer,
	getActivityState: getActivityReducer,
	getLastActivityState: getLastActivityReducer,
	getMostActiveUsersState: getMostActiveUsersReducer,
	topicByUserIdState: getTopicByUserIdReducer,
});

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== "production",
});
