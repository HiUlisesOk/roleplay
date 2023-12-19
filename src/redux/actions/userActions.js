import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from '../../utils/Logout'
import { getLastActivity } from "./activityActions";

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;





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

export const getUserById = createAsyncThunk(
	"getUserById",
	async (id, { rejectWithValue, getState, dispatch }) => {
		try {


			const userTokenLocalStorage =
				typeof window != "undefined"
					? localStorage.getItem("userToken")
						? JSON.parse(localStorage.getItem("userToken"))
						: null
					: null;

			!userTokenLocalStorage && logout()

			const config = {
				headers: {
					Authorization: `Bearer ${userTokenLocalStorage}`,
					"Content-Type": "application/json",
				},
			};

			const response = await axios.get(`/get-user-info/${id}`, config);

			const data = response.data;



			return data;

		} catch (error) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);

export const getMyInfo = createAsyncThunk(
	"getMyInfo",
	async (id, { rejectWithValue, getState, dispatch }) => {
		try {
			const { ID } = JSON.parse(localStorage.getItem('userInfo'));
			console.log('ID', ID)
			const userTokenLocalStorage =
				typeof window != "undefined"
					? localStorage.getItem("userToken")
						? JSON.parse(localStorage.getItem("userToken"))
						: null
					: null;

			!userTokenLocalStorage && logout()

			const config = {
				headers: {
					Authorization: `Bearer ${userTokenLocalStorage}`,
					"Content-Type": "application/json",
				},
			};

			const response = await axios.get(`/get-user-info/${ID || id}`, config);

			const data = response.data;

			// console.log('DATA DE GET MY INFO' + data)

			return data;

		} catch (error) {

			console.log({ message: error?.message, status: error?.response?.status });
			return ({ message: error?.message, status: error?.response?.status });
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
	async (params, { rejectWithValue, dispatch }) => {
		try {

			const userTokenLocalStorage =
				typeof window != "undefined"
					? localStorage.getItem("userToken")
						? JSON.parse(localStorage.getItem("userToken"))
						: null
					: null;

			!userTokenLocalStorage && logout()

			const config = {
				headers: {
					Authorization: `Bearer ${userTokenLocalStorage}`,
					"Content-Type": "application/json",
				},
			};


			const { imagen64 = "", ID = "" } = params
			const { data } = await axios.post(`/update-profilePicture`, { imagen64, ID }, config);
			dispatch(getUserById(ID))
			dispatch(getMyInfo())
			dispatch(getLastActivity())

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

export const getUserRolesById = createAsyncThunk(
	"getUserRolesById",
	async (id, { rejectWithValue, getState, dispatch }) => {
		try {


			const userTokenLocalStorage =
				typeof window != "undefined"
					? localStorage.getItem("userToken")
						? JSON.parse(localStorage.getItem("userToken"))
						: null
					: null;

			!userTokenLocalStorage && logout()

			const config = {
				headers: {
					Authorization: `Bearer ${userTokenLocalStorage}`,
					"Content-Type": "application/json",
				},
			};

			const response = await axios.get(`/get-user-roles?id=${id}`, config);

			const data = response.data;



			return data;

		} catch (error) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);

export const Login = createAsyncThunk(
	"Login",
	async (user, { rejectWithValue, dispatch }) => {
		try {
			const { data } = await axios.post(`/login`, user, {
				withCredentials: true,
			});
			console.log('Login', data)
			if (!data.passwordsMatch) {
				localStorage.setItem("Login", JSON.stringify(false));
				return rejectWithValue(data.message);
			} else {
				localStorage.clear();
				localStorage.setItem("userInfo", JSON.stringify(data.user));
				localStorage.setItem("userToken", JSON.stringify(data.token));
				localStorage.setItem("userRoles", JSON.stringify(data?.user?.roles));
				localStorage.setItem("Login", JSON.stringify(true));
				dispatch(getMyInfo())
				return data;
			}
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);