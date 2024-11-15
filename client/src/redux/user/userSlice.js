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
		},
	},
});

export const { signInStart, signInSuccess, signInFailure, signOut } = userSlice.actions;


export default userSlice.reducer;