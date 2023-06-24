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
				localStorage.setItem("userInfo", JSON.stringify(data));
				localStorage.setItem("LastLogin", JSON.stringify(data?.data?.lastSeen));
				return data;
			}
			return data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);