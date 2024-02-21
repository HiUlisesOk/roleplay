import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  updateUserType,
  userLoginType,
  userRegisterType,
} from "../../../../types/userTypes";

import Cookies from "js-cookie";
import { logout } from "@/app/utils/functions/logout";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
//AuthToken

export const Login = createAsyncThunk(
  "Login",
  async (user: userLoginType, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`/login`, user, {
        withCredentials: true,
      });

      console.log("Login", user);
      if (!data?.passwordsMatch) {
        Cookies.set("Login", "false");
        return rejectWithValue(data?.message);
      } else {
        Cookies.remove("userInfo");
        Cookies.remove("userToken");
        Cookies.remove("userRoles");
        Cookies.remove("Login");

        Cookies.set("userInfo", JSON.stringify(data?.user));
        Cookies.set("userToken", JSON.stringify(data?.token));
        Cookies.set("userRoles", JSON.stringify(data?.user?.roles));
        Cookies.set("Login", "true");
        return data;
      }
    } catch (error: any) {
      const errorMessage =
        (await JSON.parse(error?.request?.response)?.error) || error;
      console.log(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const Register = createAsyncThunk(
  "Register",
  async (user: userRegisterType, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/create-user`, user, {
        withCredentials: true,
      });

      if (!data.type) {
        return rejectWithValue(data.message);
      } else {
        return data;
      }
    } catch (error: any) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const getUserById = createAsyncThunk(
  "getUserById",
  async (
    id: number | string | string[] | null,
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const userToken = Cookies.get("userToken");

      const token = userToken ? JSON.parse(userToken) : null;

      !token && logout();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(`/get-user-info/${id}`, config);

      const data = response.data;

      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getMyInfo = createAsyncThunk(
  "getMyInfo",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const userToken = Cookies.get("userToken");
      const userInfoCookies = Cookies.get("userInfo");

      const { ID } = userInfoCookies ? JSON.parse(userInfoCookies) : null;

      const token = userToken ? JSON.parse(userToken) : null;

      !userToken && logout();

      !token && logout();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(`/get-user-info/${ID}`, config);

      const data = response.data;

      return data;
    } catch (error: any) {
      return error;
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (params: updateUserType, { rejectWithValue, dispatch }) => {
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

      const { data } = await axios.put(
        `/update-user`,
        {
          ID: params?.ID,
          username: params?.username,
          firstName: params?.firstName,
          lastName: params?.lastName,
          birthDate: params?.birthDate,
          email: params?.email,
          bio: params?.bio,
        },
        config
      );

      dispatch(getMyInfo());

      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

type paramsUploadImage = {
  imagen64: string;
  ID: number | null;
};

type paramsUploadBanner = {
  link: string;
  ID: number | null;
};

export const updateProfilePicture = createAsyncThunk(
  "updateProfilePicture",
  async (params: paramsUploadImage, { rejectWithValue, dispatch }) => {
    const { imagen64 = "", ID = null } = params;
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

      const { data } = await axios.post(
        `/update-profilePicture`,
        { imagen64, ID },
        config
      );

      dispatch(getMyInfo());

      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const updateBannerPicture = createAsyncThunk(
  "updateBannerPicture",
  async (params: paramsUploadBanner, { rejectWithValue, dispatch }) => {
    const { link = "", ID = null } = params;
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

      const { data } = await axios.post(`/update-banner`, { link, ID }, config);

      getMyInfo();

      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getUserActivityById = createAsyncThunk(
  "getUserActivityById",
  async (
    id: number | string | string[] | null,
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const userToken = Cookies.get("userToken");

      const token = userToken ? JSON.parse(userToken) : null;

      !token && logout();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(`/get-logs-by-id/${id}`, config);

      const data = response.data;

      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
