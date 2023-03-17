// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH6M9gCcb95Bl3vZpC0s5j28BGFPpr7f0",
  authDomain: "oopsiarted-9f629.firebaseapp.com",
  projectId: "oopsiarted-9f629",
  storageBucket: "oopsiarted-9f629.appspot.com",
  messagingSenderId: "856471118808",
  appId: "1:856471118808:web:66ce2ac19a597062e108ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, storage };
