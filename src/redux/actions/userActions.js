import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

export const Login = createAsyncThunk(
	"Login",
	async (user, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(`/login`, user, {
				withCredentials: true,
			});

			if (!data.passwordsMatch) {
				return rejectWithValue(data.message);
			} else {
				localStorage.clear();
				localStorage.setItem("userInfo", JSON.stringify(data.user));
				localStorage.setItem("userToken", JSON.stringify(data.token));
				return data;
			}
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);

export const Register = createAsyncThunk(
	"Register",
	async (user, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(`/create-user`, user, {
				withCredentials: true,
			});

			if (!data.type) {
				return rejectWithValue(data.message);
			} else {
				return data;
			}
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);

export const uploadImage = createAsyncThunk(
	"uploadImage",
	async (imagen64, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(`/upload-image`, imagen64, {
				withCredentials: true,
			});

			if (!data.type) {
				return rejectWithValue(data.message);
			} else {
				return data;
			}
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);

export const updateProfilePicture = createAsyncThunk(
	"updateProfilePicture",
	async (params, { rejectWithValue }) => {
		try {
			const { imagen64 = "", ID = "", username = "", Email = "" } = params
			const { data } = await axios.put(`/upload-image`, imagen64, {
				withCredentials: true,
			});

			if (!data.type) {
				return rejectWithValue(data.message);
			} else {
				return data;
			}
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);