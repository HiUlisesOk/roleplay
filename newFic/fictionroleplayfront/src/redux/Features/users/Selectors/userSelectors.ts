import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = createSelector(
  (state) => state.user,
  (user) => user
);

export const selectStatus = createSelector(
  (state) => state.status,
  (status) => status
);

export const selectError = createSelector(
  (state) => state.error,
  (error) => error
);

export const selectRegister = createSelector(
  (state) => state.userRegisterInfo,
  (userRegisterInfo) => userRegisterInfo
);

export const selectGetMyInfo = createSelector(
  (state: any) => state.getMyInfoState,
  (getMyInfoState) => getMyInfoState
);

export const selectgetUserById = createSelector(
  (state: any) => state.getUserByIdState,
  (getUserByIdState) => getUserByIdState
);

export const selectgetUserActivityById = createSelector(
  (state: any) => state.getUserActivityByIdState,
  (getUserActivityByIdState) => getUserActivityByIdState
);
