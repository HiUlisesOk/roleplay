import { logout } from "@/app/utils/functions/logout";
import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const uploadImage = createAsyncThunk(
  "uploadImage",
  async (imagen64: any, { rejectWithValue }) => {
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

      const { data } = await axios.post(`/upload-image`, { imagen64 }, config);

      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
