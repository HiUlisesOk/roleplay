import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { getLastActiveTopics, getTopicsById } from "../Actions/topicsActions";
import { failed, loading, success } from "@/redux/constantRedux";

interface InitialState {
  lastActiveTopics: any;
  getTopicsByIdState: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: InitialState = {
  lastActiveTopics: null,
  getTopicsByIdState: null,
  status: "idle",
  error: null,
};

export const lastActiveTopicsReducer = createSlice({
  name: "lastActiveTopics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLastActiveTopics.pending, (state) => {
        state.status = loading;
      })
      .addCase(getLastActiveTopics.fulfilled, (state, action) => {
        state.status = success;
        state.lastActiveTopics = action.payload;
      })
      .addCase(getLastActiveTopics.rejected, (state, action) => {
        state.status = failed;
        console.error("lastActiveTopics Error => ", action.payload);
        state.error = action.payload as string;
      });
  },
});

export const getTopicsByIdReducer = createSlice({
  name: "getTopicsByIdReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopicsById.pending, (state) => {
        state.status = loading;
      })
      .addCase(getTopicsById.fulfilled, (state, action) => {
        state.status = success;
        state.getTopicsByIdState = action.payload;
      })
      .addCase(getTopicsById.rejected, (state, action) => {
        state.status = failed;
        console.error("lastActiveTopics Error => ", action.payload);
        state.error = action.payload as string;
      });
  },
});

export default lastActiveTopicsReducer.reducer;
