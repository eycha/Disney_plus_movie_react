// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjKb9EeH43L1n2IaHPyyOiosP9TRKzlCA",
  authDomain: "react-disney-project-75aa0.firebaseapp.com",
  projectId: "react-disney-project-75aa0",
  storageBucket: "react-disney-project-75aa0.appspot.com",
  messagingSenderId: "232677483087",
  appId: "1:232677483087:web:43d41c552400e48f32003a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
