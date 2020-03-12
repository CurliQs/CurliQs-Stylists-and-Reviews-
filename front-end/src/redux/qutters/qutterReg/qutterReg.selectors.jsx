import { createSelector } from "reselect";

const getUser = state => state.curliq;

export const selectUser = createSelector(
	[getUser],
	user => user.user
);