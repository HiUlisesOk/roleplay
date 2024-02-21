import { combineReducers, createSlice } from "@reduxjs/toolkit";
import {
  Login,
  Register,
  getMyInfo,
  getUserById,
  getUserActivityById,
} from "../Actions/usersActions";
import { failed, loading, success } from "@/redux/constantRedux";

interface Role {
  rolename: string;
  value: number;
}

interface UserData {
  ID: number;
  username: string;
  firstName: string | null;
  roles: Role[];
  passwordMatch: boolean;
}

interface User {
  message: number;
  token: string;
  user: UserData;
  passwordsMatch: boolean;
}

interface UserRegister {
  message: string;
  type: boolean;
  log: any;
}

interface InitialState {
  userInfo: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
  userRegisterInfo: UserRegister | null;
  getMyInfoState: any;
  getUserByIdState: any;
  getUserActivityByIdState: any;
}

const initialState: InitialState = {
  userInfo: null,
  getMyInfoState: null,
  status: "idle",
  error: null,
  userRegisterInfo: null,
  getUserByIdState: null,
  getUserActivityByIdState: null,
};

export const LoginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.status = loading;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.status = success;
        state.userInfo = action.payload;
      })
      .addCase(Login.rejected, (state, action) => {
        state.status = failed;
        console.error("Login Error => ", action.payload);
        state.error = action.payload as string;
      });
  },
});

export const RegisterReducer = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Register.pending, (state) => {
        state.status = loading;
      })
      .addCase(Register.fulfilled, (state, action) => {
        state.status = success;
        state.userRegisterInfo = action.payload;
      })
      .addCase(Register.rejected, (state, action) => {
        state.status = failed;
        console.error("Register Error => ", action.payload);

        state.error = action.payload as string;
      });
  },
});

export const getMyInfoReducer = createSlice({
  name: "getMyInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyInfo.pending, (state) => {
        state.status = loading;
      })
      .addCase(getMyInfo.fulfilled, (state, action) => {
        state.status = success;
        state.getMyInfoState = action.payload;
        // console.log("getMyInfoReducer => ", action.payload);
      })
      .addCase(getMyInfo.rejected, (state, action) => {
        state.status = failed;
        console.error("getMyInfoReducerError => ", action.payload);

        state.error = action.payload as string;
      });
  },
});

export const getUserByIdReducer = createSlice({
  name: "getUserById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.status = loading;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = success;
        state.getUserByIdState = action.payload;
        // console.log("getMyInfoReducer => ", action.payload);
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = failed;
        console.error("getMyInfoReducerError => ", action.payload);

        state.error = action.payload as string;
      });
  },
});

export const getUserActivityByIdReducer = createSlice({
  name: "getUserActivityById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserActivityById.pending, (state) => {
        state.status = loading;
      })
      .addCase(getUserActivityById.fulfilled, (state, action) => {
        state.status = success;
        state.getUserActivityByIdState = action.payload;
        // console.log("getMyInfoReducer => ", action.payload);
      })
      .addCase(getUserActivityById.rejected, (state, action) => {
        state.status = failed;
        console.error("getMyInfoReducerError => ", action.payload);

        state.error = action.payload as string;
      });
  },
});

export default LoginReducer.reducer;
