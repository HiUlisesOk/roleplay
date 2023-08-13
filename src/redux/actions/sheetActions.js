import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from '../../utils/Logout';

export const createSheet = createAsyncThunk(
    "createSheet",
    async (sheet, { rejectWithValue, dispatch }) => {
        try {
            const userTokenLocalStorage =
                typeof window != "undefined"
                    ? localStorage.getItem("userToken")
                        ? JSON.parse(localStorage.getItem("userToken"))
                        : null
                    : null;

            !userTokenLocalStorage && logout();

            const config = {
                headers: {
                    Authorization: `Bearer ${userTokenLocalStorage}`,
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(`/create-sheet`, sheet, config);

            if (!data.type) {
                return rejectWithValue(data.message);
            } else {
                console.log(data, 'action');
                return data;
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

export const getSheetInfo = createAsyncThunk(
    "getSheetInfo",
    async (id, { rejectWithValue }) => {
        try {
            const userTokenLocalStorage =
                typeof window != "undefined"
                    ? localStorage.getItem("userToken")
                        ? JSON.parse(localStorage.getItem("userToken"))
                        : null
                    : null;

            !userTokenLocalStorage && logout();

            const config = {
                headers: {
                    Authorization: `Bearer ${userTokenLocalStorage}`,
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.get(`get-sheet-info/${id}`, config);
            const data = response.data;
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

export const getSheetByCharId = createAsyncThunk(
    "getSheetByCharId",
    async (id, { rejectWithValue }) => {
        try {
            const userTokenLocalStorage =
                typeof window != "undefined"
                    ? localStorage.getItem("userToken")
                        ? JSON.parse(localStorage.getItem("userToken"))
                        : null
                    : null;

            !userTokenLocalStorage && logout();

            const config = {
                headers: {
                    Authorization: `Bearer ${userTokenLocalStorage}`,
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.get(`get-sheet-getSheetByCharId/${id}`, config);
            const data = response.data;
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);


export const getAllSheets = createAsyncThunk(
    "getAllSheets",
    async (params, { rejectWithValue }) => {
        try {
            const userTokenLocalStorage =
                typeof window != "undefined"
                    ? localStorage.getItem("userToken")
                        ? JSON.parse(localStorage.getItem("userToken"))
                        : null
                    : null;

            !userTokenLocalStorage && logout();

            const config = {
                headers: {
                    Authorization: `Bearer ${userTokenLocalStorage}`,
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.get(`/get-all-Sheets`, config);
            const data = response.data;
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);


export const updateSheet = createAsyncThunk(
    "updateSheet",
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const userTokenLocalStorage =
                typeof window != "undefined"
                    ? localStorage.getItem("userToken")
                        ? JSON.parse(localStorage.getItem("userToken"))
                        : null
                    : null;

            !userTokenLocalStorage && logout();

            const config = {
                headers: {
                    Authorization: `Bearer ${userTokenLocalStorage}`,
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.put(`/update-sheet`, params, config);
            return data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);


export const deleteSheet = createAsyncThunk(
    "deleteSheet",
    async (roleplaySheetID, { rejectWithValue }) => {
        try {
            const userTokenLocalStorage =
                typeof window != "undefined"
                    ? localStorage.getItem("userToken")
                        ? JSON.parse(localStorage.getItem("userToken"))
                        : null
                    : null;

            !userTokenLocalStorage && logout();

            const config = {
                headers: {
                    Authorization: `Bearer ${userTokenLocalStorage}`,
                    "Content-Type": "application/json",
                },
            };
            await axios.delete(`/delete-sheet?ID=${roleplaySheetID}`, config);
            return roleplaySheetID;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

/*
export const updateCharacter = createAsyncThunk(
    "updateCharacter",
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const userTokenLocalStorage =
                typeof window != "undefined"
                    ? localStorage.getItem("userToken")
                        ? JSON.parse(localStorage.getItem("userToken"))
                        : null
                    : null;

            !userTokenLocalStorage && logout();

            const config = {
                headers: {
                    Authorization: `Bearer ${userTokenLocalStorage}`,
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.put(`/update-character`, params, config);
            return data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);





export const getPostByTopicID = createAsyncThunk(
    "getPostByTopicID",
    async (id, { rejectWithValue }) => {
        try {
            const userTokenLocalStorage =
                typeof window != "undefined"
                    ? localStorage.getItem("userToken")
                        ? JSON.parse(localStorage.getItem("userToken"))
                        : null
                    : null;

            !userTokenLocalStorage && logout();

            const config = {
                headers: {
                    Authorization: `Bearer ${userTokenLocalStorage}`,
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.get(`/get-post-byTopicId?topicId=${id}`, config);
            const data = response.data;
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);



export const updatePost = createAsyncThunk(
    "updatePost",
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const userTokenLocalStorage =
                typeof window != "undefined"
                    ? localStorage.getItem("userToken")
                        ? JSON.parse(localStorage.getItem("userToken"))
                        : null
                    : null;

            !userTokenLocalStorage && logout();

            const config = {
                headers: {
                    Authorization: `Bearer ${userTokenLocalStorage}`,
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.put(`/update-post`, params, config);
            return data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
); */