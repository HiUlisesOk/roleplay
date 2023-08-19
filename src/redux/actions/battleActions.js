import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from '../../utils/Logout';

export const startBattle = createAsyncThunk(
    "startBattle",
    async (battle, { rejectWithValue, dispatch }) => {

        try {
            const { CharID, objectiveID, actionTypes } = battle;

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
            const { data } = await axios.post(`/start-battle?CharID=${CharID}&objectiveID=${objectiveID}&actionTypes=${actionTypes}`, {}, config);

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

export const getAllCharacters = createAsyncThunk(
    "getAllCharacters",
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
            const response = await axios.get(`/get-all-characters`, config);
            const data = response.data;
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);


export const getCharacterInfo = createAsyncThunk(
    "getCharacterInfo",
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
            const response = await axios.get(`get-character-info?id=${id}`, config);
            const data = response.data;
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

export const deleteCharacter = createAsyncThunk(
    "deleteCharacter",

    async (characterID, { rejectWithValue }) => {
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
            await axios.delete(`/delete-character?ID=${characterID}`, config);
            return characterID;
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
