import { createSelector } from "@reduxjs/toolkit";

export const getActivitySelector = createSelector(
	(state) => state.getActivityState,
	(getActivity) => getActivity
);

export const getLastActivitySelector = createSelector(
	(state) => state.getLastActivityState,
	(getLastActivity) => getLastActivity
);

export const getMostActiveUsersSelector = createSelector(
	(state) => state.getMostActiveUsersState,
	(getMostActiveUsers) => getMostActiveUsers
);
