import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from '../../utils/Logout';

export const getAllPost = createAsyncThunk(
    "getAllPost",
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
            const response = await axios.get(`/get-all-post`, config);
            const data = response.data;
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const createPost = createAsyncThunk(
    "createPost",
    async (post, { rejectWithValue, dispatch }) => {
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
            const { data } = await axios.post(`/create-post`, post, config);

            if (!data.type) {
                return rejectWithValue(data.message);
            } else {
                console.log(data, 'action');
                dispatch(getAllPost());
                return data;
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const deletePost = createAsyncThunk(
    "deletePost",

    async (postID, { rejectWithValue, dispatch }) => {
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
            await axios.delete(`/delete-post?ID=${postID}`, config);
            dispatch(getAllPost());
            return postID;
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
);