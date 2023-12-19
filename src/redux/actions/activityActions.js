import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from '../../utils/Logout'

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

export const getActivity = createAsyncThunk(
	"getActivity",
	async (id, { rejectWithValue, getState, dispatch }) => {
		// console.log('Inicia getActivity')
		try {
			// console.log('No rompe el try')
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

			const response = await axios.get(`/get-all-logs`, config);
			// console.log('Respuesta ' + response)
			const data = response.data;
			return data;

		} catch (error) {
			console.log('errorGetmyInfo' + error);
			return ('errorGetmyInfo' + error);
		}
	}
);

export const getLastActivity = createAsyncThunk(
	"getLastActivity",
	async (id, { rejectWithValue, getState, dispatch }) => {
		// console.log('Inicia getLastActivity')
		try {
			// console.log('No rompe el try')
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

			const response = await axios.get(`/get-last-logs`, config);
			// console.log('Respuesta ' + response)
			const data = response.data;
			return data;

		} catch (error) {
			console.log('errorGetmyInfo' + error);
			return ('errorGetmyInfo' + error);
		}
	}
);

export const getMostActiveUsers = createAsyncThunk(
	"getMostActiveUsers",
	async (id, { rejectWithValue, getState, dispatch }) => {
		console.log('Inicia getMostActiveUsers')
		try {
			// console.log('No rompe el try')
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

			const response = await axios.get(`/get-most-active-users`, config);
			console.log('Respuesta ', response)
			const data = response.data;
			return data;

		} catch (error) {
			console.log('errorGetmyInfo', error);
			return ('errorGetmyInfo', error);
		}
	}
);