// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-auth-e736a.firebaseapp.com",
	projectId: "mern-auth-e736a",
	storageBucket: "mern-auth-e736a.firebasestorage.app",
	messagingSenderId: "958803346280",
	appId: "1:958803346280:web:8f9e16ab74d68717d28cdd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);