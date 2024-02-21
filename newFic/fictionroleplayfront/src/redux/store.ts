// store.js
"use client";

import { configureStore, AnyAction, Reducer } from "@reduxjs/toolkit";
import LoginReducer, {
  RegisterReducer,
  getMyInfoReducer,
  getUserActivityByIdReducer,
  getUserByIdReducer,
} from "./Features/users/Reducers/userReducer";
import {
  getTopicsByIdReducer,
  lastActiveTopicsReducer,
} from "./Features/topics/Reducers/topicReducers";

export const store = configureStore({
  reducer: {
    Login: LoginReducer,
    userRegisterInfo: RegisterReducer.reducer,
    lastActiveTopics: lastActiveTopicsReducer.reducer,
    getMyInfoState: getMyInfoReducer.reducer,
    getUserByIdState: getUserByIdReducer.reducer,
    getUserActivityByIdState: getUserActivityByIdReducer.reducer,
    getTopicsByIdState: getTopicsByIdReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
