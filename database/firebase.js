import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    setDoc,
    deleteDoc,
  } from "firebase/firestore";
  import { getAuth } from "firebase/auth";
  import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    getBytes,
  } from "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyAq5uYHFxmullj1_KWzcuHBSNSwZVj5o1s",
    authDomain: "react-native-firebase-52e91.firebaseapp.com",
    projectId: "react-native-firebase-52e91",
    storageBucket: "react-native-firebase-52e91.appspot.com",
    messagingSenderId: "372851856160",
    appId: "1:372851856160:web:1d700b63344a7dd5547d45"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();