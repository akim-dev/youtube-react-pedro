// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqhvLX6_OgvyjBqPdRgwOWXeqy0xCsij8",
  authDomain: "pedro-course-a4149.firebaseapp.com",
  projectId: "pedro-course-a4149",
  storageBucket: "pedro-course-a4149.appspot.com",
  messagingSenderId: "902874443440",
  appId: "1:902874443440:web:b25444d1e4e37791209575",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
