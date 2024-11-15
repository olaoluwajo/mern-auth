import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

export const store = configureStore({
	reducer: { user: userReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			// Add any middleware here
			// e.g. logger, thunk, etc.
			serializableCheck: false,
		}),
});