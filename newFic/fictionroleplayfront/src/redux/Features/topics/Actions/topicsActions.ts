import { logout } from "@/app/utils/functions/logout";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getLastActiveTopics = createAsyncThunk(
  "getLastActiveTopics",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const userToken = Cookies.get("userToken");

      const token = userToken ? JSON.parse(userToken) : null;

      !userToken && logout();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(`/getLastActiveTopics`, config);

      const data = response.data;

      return data;
    } catch (error: any) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const getTopicsById = createAsyncThunk(
  "getTopicsById",
  async (
    id: number | string | string[],
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const userToken = Cookies.get("userToken");

      const token = userToken ? JSON.parse(userToken) : null;

      !userToken && logout();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(`/get-topic?id=${id}`, config);

      const data = response.data;

      return data;
    } catch (error: any) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
