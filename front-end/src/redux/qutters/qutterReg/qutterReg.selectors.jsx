import { createSelector } from "reselect";

const getUser = state => state.qutter;

export const selectUser = createSelector(
	[getUser],
	qutter => qutter.qutter
);