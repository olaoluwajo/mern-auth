import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: null,
	currentUser: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		signInStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		signInSuccess: (state, action) => {
			state.loading = false;
			state.currentUser = action.payload;
			state.error = false;
		},
		signInFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		signOut: (state) => {
			state.currentUser = null;
			state.error = false;
			state.loading = false;
		},
		updateUserStart: (state) => {
			state.loading = true;
		},

		updateUserSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.loading = false;
			state.error = false;
		},
		updateUserFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		deleteUserStart: (state) => {
			state.loading = true;
		},
		deleteUserSuccess: (state) => {
			state.currentUser = null;
			state.loading = false;
			state.error = false;
		},
		deleteUserFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	signInStart,
	signInSuccess,
	signInFailure,
	signOut,
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
	deleteUserFailure,
	deleteUserSuccess,
	deleteUserStart
} = userSlice.actions;

export default userSlice.reducer;
