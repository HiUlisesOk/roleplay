import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from '../../utils/Logout'
// axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;


export const getAllTopic = createAsyncThunk(
	"getAllTopic",
	async (params,  { rejectWithValue}) => {
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
                const response = await axios.get(`/get-all-topics`, config);
                const data = response.data;
                console.log(data)
                return data;
            } catch (error) {
                console.log(error);
                return rejectWithValue(error.message);
            }
        }
    );
    export const createTopic = createAsyncThunk(
        "createTopic",
        async (topic, { rejectWithValue, dispatch }) => {
            try {
                const { data } = await axios.post(`/create-topic`, topic, {
                    withCredentials: true,
                });
   
                if (data.type) {
                    return rejectWithValue(data.message);
                } else {
                    dispatch(getAllTopic())
                    return data;
                }
            } catch (error) {
                console.log(error);
                return rejectWithValue(error.message);
            }
        }
    );
    export const deleteTopic = createAsyncThunk(
        "deleteTopic",
        
        async (topicID,  { rejectWithValue, dispatch }) => {
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
            await axios.delete(`/delete-topic?ID=${topicID}`, config);
            dispatch(getAllTopic())
            return topicID; 
          } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
         }
        }
      );

      
export const updateTopicTitle = createAsyncThunk(
	"updateTopicTitle",
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
			const { data } = await axios.put(`/update-topic`, params ,config);
            dispatch(getAllTopic())
			return data;
			
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);